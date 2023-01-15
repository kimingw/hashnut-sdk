import { createPortal } from 'react-dom'
// import 'tronweb'
// import { ethers } from "ethers"
import { Mask, Login, Pay } from './components'
import { projectName, urlPay } from './config'
import { createXHR, getUUID, getAddress } from './utils'
import check from './helper/check'
import { useCoins } from './helper/hook'

const hashnutId = document.getElementById(projectName)


function App({ lang: _lang, erc20Address, bep20Address, trc20Address, polygonErc20Address }: InitProps) {
  // 弹窗相关
  const [mask, setMask] = useState(null)
  const [hideMask, setHideMask] = useState(false)

  // 传入信息相关
  const [payInfo, setPayInfo] = useState({})
  const [loginInfo, setLoginInfo] = useState({})

  // 基础信息
  const [lang, setLang] = useState(_lang ? _lang : 'en')
  const [address, setAddress] = useState({
    erc20Address,
    bep20Address,
    trc20Address,
    polygonErc20Address,
  })
  const coins = useCoins(address)

  const currencyRateXhr = useRef(null)
  const orderXhr: any = useRef(null)
  // 利率缓存
  const caches: any = useRef({})

  window[projectName] = {
    init: (configuration: InitProps) => {
      check.init(configuration)
      const { lang, erc20Address, bep20Address, trc20Address, polygonErc20Address } = configuration
      lang && setLang(lang)
      setAddress({ erc20Address, bep20Address, trc20Address, polygonErc20Address })
    },
    changeLang: (lang: Lang) => {
      check.changeLang(lang)
      if (['en', 'zh', 'zh-hk'].includes(lang)) {
        setLang(lang)
      }
    },
    getSupportCoins: () => {
      return coins
    },
    createOrder: (chainCode: ChainCode, coinCode: CoinCode, amount: number, callback: any) => {
      check.createOrder(chainCode, coinCode, amount, callback)
      if (orderXhr.current) {
        orderXhr.current.abort();
        orderXhr.current = null
      }
      const decimals = coinCode === 'busd' ? 18 : 6
      let intAmount: string | number = amount * 100
      for (let index = 0; index < decimals - 2; index++) {
        intAmount = intAmount + '' + 0
      }
      const data = {
        subject: 'web create order',
        remark: 'web create order',
        mchOrderNo: getUUID(window.location.hostname + new Date().getTime()),
        chainCode,
        coinCode,
        amount: intAmount,
        receiptContractAddress: getAddress(chainCode, address),
        accessChannel: 0,
        serviceId: 0,
        serviceVersion: 'PaymentSplitterV2_1',
        serviceType: 0
      }
      orderXhr.current = createXHR('/pay/createPayOrderByCashier', 'POST', data, (res: any) => {
        res.data.amount = intAmount
        callback(res)
      }, (res: any) => {
        callback(res)
      }, () => {
        orderXhr.current = null
      })
    },
    getCurrencyRate: (chainCode: ChainCode, coin: CoinCode, currency: Currency, callback: any) => {
      check.getCurrencyRate(chainCode, coin, currency)
      if (currencyRateXhr.current) {
        currencyRateXhr.current.abort();
        currencyRateXhr.current = null
      }
      const res = caches.current[chainCode + '_' + coin + '_' + currency]
      if (res) {
        const now = new Date().getTime()
        if (now - res.ts < 1000 * 30) {
          callback && callback(res.data)
          return
        }
      }
      const data = {
        quoteCoin: currency,
        baseCoin: coin,
        chainCode: chainCode
      }
      currencyRateXhr.current = createXHR("/mch/queryFliatExchangeRate", 'GET', data, (res: any) => {
        caches.current[chainCode + '_' + coin + '_' + currency] = {
          ts: new Date().getTime(),
          data: res
        }
        callback(res)
      }, (res: any) => {
        currencyRateXhr.current = null
        callback(res)
      }, () => {
        currencyRateXhr.current = null
      })
    },
    login: (loginRes: LoginRes, callback: LoginCallback) => {
      check.login(loginRes, callback)
      setLoginInfo({ loginRes, callback })
      setMask('login')
    },
    pay: (amount: number, currency: Currency, callbackURL: string, callback: any) => {
      check.pay(amount, currency, callbackURL)
      setPayInfo({ amount, currency, callbackURL, callback })
      setMask('pay')
    },
    getURL: (order: Order, callbackURL: string) => {
      check.getURL(order)
      return urlPay + '?accessSign=' + order.accessSign + '&mchOrderNo=' + order.mchOrderId + '&platformId=' + order.platformId + '&chainCode=' + order.chainCode.toLocaleLowerCase() + (callbackURL ? '&callbackURL=' + encodeURIComponent(callbackURL) : '')
    }
  }

  if (mask) {
    const _renderMask = (DOM: React.ReactElement) => {
      return <Mask paramObject={{ mask, setMask, hideMask, setHideMask }}>{DOM}</Mask>
    }
    let portal
    switch (mask) {
      case 'login':
        portal = _renderMask(<Login configure={{ lang, loginInfo }} emit={{ setHideMask }} />)
        break;
      case 'pay':
        portal = _renderMask(<Pay configure={{ address, lang, payInfo }} emit={{ setHideMask }} />)
        break;
    }
    return (createPortal(portal, hashnutId ? hashnutId : document.body))
  }
  return <></>
}

export default App
