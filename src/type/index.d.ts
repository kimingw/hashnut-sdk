interface A {
  lang: Lang
}
type Lang = 'en' | 'zh' | 'zh-hk' // default: en
type Currency = 'USD' | 'HKD' | 'CNY'
type ChainCode = 'ERC20' | 'BEP20' | 'TRC20' | 'erc20' | 'bep20' | 'trc20'
type CoinCode = 'usdt' | 'busd'

interface InitProps {
  lang?: Lang
  erc20Address?: string
  bep20Address?: string
  trc20Address?: string
  polygonErc20Address?: string
}

interface AddressProps {
  erc20Address: string
  bep20Address: string
  trc20Address: string
  polygonErc20Address: string
}

interface Coin {
  chainCode: string
  coinCode: string
}

type Coins = Array<Coin>

interface PayInfo {
  amount: number
  currency: Currency
  callbackURL: string
  callback: (order: Order, url: string) => void
}

interface LoginRes {
  eth: 1 | 3 | 5 | 42
  bsc: 56 | 97
  tron: 'mainnet' | 'shasta'
  url: string
}

type LoginCallback = (params1: any, params2: any, params3?: any) => void

interface LoginInfo {
  loginRes: LoginRes,
  callback: LoginCallback
}

interface PayConfigure {
  address: AddressProps,
  lang: Lang,
  payInfo: PayInfo
}

interface PayEmit {
  setHideMask: (value: Boolean) => void
}

interface PayParams {
  configure: PayConfigure,
  emit: PayEmit,
}

interface LoginConfigure {
  lang: Lang,
  loginInfo: LoginInfo
}

interface LoginEmit {
  setHideMask: (value: Boolean) => void
}

interface LoginParams {
  configure: LoginConfigure,
  emit: LoginEmit,
}


interface LoginNet {
  eth?: number, // 1,3,4,5,42
  bsc?: number, // 56,97
  tron?: string, //mainnet,shasta
}


interface Order {
  accessChannel: number
  accessSign: string
  amount: string
  bridgeServerAddress: string
  chain: string
  chainCode: string
  chainId: number
  coinCode: string
  confirmCount: number
  contractAddress: string
  createChannel: number
  eip712ChainId: number
  genNftConfirmCount: number
  genNftState: number
  inputData: string
  mchAddress: string
  mchOrderId: string
  mintNftConfirmCount: number
  mintNftState: number
  platformId: string
  receiptAddress: string
  state: number
  walletConnectEnable: boolean
}
interface Hasnut {
  init: (config: HasNutProps) => void
  pay: (payInfo: PayInfo, lang?: Lang) => void
  login: (loginInfo: LoginInfo, lang?: Lang) => void
}