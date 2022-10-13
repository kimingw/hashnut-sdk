import { createPortal } from 'react-dom'
import 'tronweb'
// import { ethers } from "ethers";
import { Mask, Login, Pay } from './components'
import { projectName, urlPay } from './config'
import { createXHR, getUUID, getAddress } from './utils'
import './hashnut.css'

const hashnutId = document.getElementById('hashnut')

function App() {
  const [mask, setMask]: any = useState(null)
  const [hideMask, setHideMask] = useState(false)

  const [payInfo, setPayInfo] = useState({})
  const [loginInfo, setLoginInfo] = useState({})


  // 基础信息
  const [lang, setLang] = useState('en')
  const [address, setAddress] = useState({
    erc20Address: '0xef2651210c1c7f913899fedf79ab2088fc5bf09f',
    bep20Address: '0xcdb2354508f2fdd0326e284af2d79dcc95df170d',
    trc20Address: 'TWMX98DHbnNmHX4cNy6YJTRWzyGhRKeZ5a',
  })
  const currencyRateXhr = useRef(null)
  const orderXhr = useRef(null)
  const caches: any = {}
  const coins: any = []

  window[projectName] = {
    init: (configuration: any) => {
      const { lang, erc20Address, bep20Address, trc20Address } = configuration
      setLang(lang)
      setAddress({ erc20Address, bep20Address, trc20Address })
      // 查看可用的coins
      if (erc20Address.length > 0) {
        coins.push({ chainCode: 'erc20', coinCode: 'usdt' })
        coins.push({ chainCode: 'erc20', coinCode: 'usdc' })
      }
      if (bep20Address.length > 0) {
        coins.push({ chainCode: 'bsc', coinCode: 'busd' })
      }
      if (trc20Address.length > 0) {
        coins.push({ chainCode: 'trc20', coinCode: 'usdt' })
      }
    },
    changeLang: (lang: string) => {
      if (lang !== 'en' && lang !== 'zh' && lang !== 'zh-hk') return
      setLang(lang)
    },
    getSupportCoins: () => {
      return coins
    },
    createOrder: (chainCode: string, coinCode: string, amount: number, callback: any) => {
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
        mchOrderNo: getUUID(window.location.hostname + new Date().getTime()),
        chainCode,
        coinCode,
        amount: intAmount,
        receiptContractAddress: getAddress(chainCode, address),
        accessChannel: 0
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
    getCurrencyRate: (chainCode: string, coin: string, currency: string, callback: any) => {
      if (currencyRateXhr.current) {
        currencyRateXhr.current.abort();
        currencyRateXhr.current = null
      }
      const res = caches[chainCode + '_' + coin + '_' + currency]
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
        callback(res)
      }, (res: any) => {
        currencyRateXhr.current = null
        callback(res)
      }, () => {
        currencyRateXhr.current = null
      })
    },
    login: (loginRes: any, callback: any) => {
      setLoginInfo({ loginRes, callback })
      setMask('login')
    },
    pay: (amount: any, currency: any) => {
      setPayInfo({ amount, currency })
      setMask('pay')
    },
    getURL: (order: any, callbackURL: string) => {
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
        portal = _renderMask(<Login configure={{ loginInfo }} emit={{ setHideMask }} />)
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
