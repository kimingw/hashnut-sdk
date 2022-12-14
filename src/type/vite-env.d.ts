/// <reference types="vite/client" />
interface Window {
  ethereum: any
  tronWeb: any
  tronLink: any
  imToken: any
  TokenWebView: any
  webkit: any
  TPJSBrigeClient: any
  axiosCancel: any
  isSwitchByCode: boolean
  HashNut: any
  inKampayApp: boolean
  ReactNativeWebView: any
  ReactNativeCallBack: any
  isTokenPock: boolean
  [propName: string]: any
  tokenPock_callback: () => void
}
// interface process
declare module 'tronweb'
declare module 'file-saver'
declare module 'qrcode'

declare module 'react-syntax-highlighter/dist/esm/styles/prism'
declare module 'react-syntax-highlighter'