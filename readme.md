# hashnut-skd from vite build

### 文档
把文件导入你的项目会在window绑定一个对象来使用
#### npm run dev 跑项目
#### npm run build 打包包含html的内容
#### npm run build-lib 打包纯js和css的内容

## Init（window.hashnut.init）注意：除了init之外，其余的方法都要init之后才能使用
----
输入基础的值来初始化sdk

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| configuration | object | null | 传入你的基础值 | 是 |

### configuration（Init的配置内容）
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| erc20Address | string | "" | 你的erc20合约地址，三个地址至少填其中一个 | 是 |
| bep20Address | string | "" | 你的bep20合约地址，三个地址至少填其中一个 | 是 |
| trc20Address | string | "" | 你的trc20合约地址，三个地址至少填其中一个 | 是 |
| lang | string | "en" | 只能是en,zh,zh-hk三个中其中一个 | 否 |



## ChangeLang（window.hashnut.changeLang）
----
修改当前sdk的语言，只有en，zh，zh-hk，三个可选值

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|--------- |---------|---------|
| lang | string |  '' | 修改语言 | 是 |

## GetSupportCoins（window.hashnut.getSupportCoins）
----
返回当前可供支持的币种 

## CreateOrder（window.hashnut.CreateOrder）
----
创建订单并且返回订单的内容

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| chainCode | string | null | ERC20,BEP20,TRC20其中之一| 是 |
| coinCode| string | null | usdt,busd其中之一 | 是 |
| amount | number | null | 创建订单的金额 | 是 |
| callback | func |  null | 创建完订单的回调函数，函数内有订单信息 | 否 |

返回订单信息如下
```javascript
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
```

## GetCurrencyRate（window.hashnut.getCurrencyRate）
----
获取当前币种的利率

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| chainCode | string | null | erc20,bep20,trc20其中之一| 是 |
| coin| string | null | usdt,busd其中之一 | 是 |
| currency | number | null | USD,HKD,CNY其中之一 | 是 |
| callback | func |  null | 查询完利率的回调函数，函数内有利率信息 | 否 |

返回利率信息如下（前三个值与你传如值一致）
```javascript
interface Rate {
  baseCoin: string
  chainCode: string
  quoteCoin: string
  rate: number
}
```

## Login（window.hashnut.login）
----
弹出登录框进行sdk登录（并不影响支付订单等内容，但是登录可以获取钱包的信息）

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| loginRes | object | null | 登录需要的基础信息 | 是 |
| callback | func |  null | 登录结束的回调函数，返回登录信息 | 否 |

### loginRes（Login的基础信息）注意：eth、bsc、tron要至少有一个
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| eth | number | null | eth的网络链id（目前只支持1, 3, 5, 42） | 是 |
| bsc | number |  null | bsc的网络链id（目前只支持56, 97） | 是 |
| tron | string |  null | tron的网络链id（目前只支持'mainnet', 'shasta'） | 是 |
| url | string |  '' | 跳转到钱包app时，自动跳转的url，可填你的当前页面 | 否 |

Login的回调函数
```javascript
interface Rate {
  chainId: string
  chainName: string
  sign: string
  message: string
  account: string
  verifyBoolean: boolean
}
```

## Pay（window.hashnut.pay）
----
弹出支付框并且可选择支付的合约以及币种

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| amount | number | null | 订单的金额 | 是 |
| currency | string | null | USD,HKD,CNY其中之一 | 是 |
| callbackURL | number | null | 支付成功的返回地址 | 否 |
| callback | func |  null | 支付成功的回调函数 | 否 |

回调函数返回订单信息以及callbackURL（订单信息可参考创建订单的内容）

## GetURL（window.hashnut.getURL）
----
根据订单信息，返回支付url

### Prop
----
| 参数名字 | 值类型 | 默认值  | 说明 |  是否必需 |
|---------|---------|----------|---------|---------|
| order | object | null | 订单信息 | 是 |

注意：订单信息可参考创建订单方法
