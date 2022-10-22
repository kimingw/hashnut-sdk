type TargetType = 'string' | 'number' | 'object' | 'array'


const isTypeof = (param: any) => {
    return Object.prototype.toString.call(param).slice(8, -1).toLowerCase()
}

const docArr = (paramName: String, params: String) => {
    return `The ${paramName} value is wrong, only one of ${params}`
}

const checkArr = (target: any, arr: any[], str: string) => {
    if (!arr.includes(target)) {
        throw docArr(str, arr.toString())
    }
}

const required = (param: any, targetType: TargetType, name: string) => {
    if (!param) {
        throw `Please pass in ${name}`
    } else if (isTypeof(param) !== targetType) {
        throw `The ${name} type is ${isTypeof(param)} and should be ${targetType}`
    }
}

const typeCheck = (param: any, targetType: TargetType, name: string) => {
    if (param && isTypeof(param) !== targetType) {
        throw `The ${name} type is ${isTypeof(param)} and should be ${targetType}`
    }
}

const check: any = {
    init: (configuration: InitProps) => {
        required(configuration, 'object', 'configuration')

        const { erc20Address, bep20Address, trc20Address } = configuration
        if (!erc20Address && !bep20Address && !trc20Address) {
            throw `Fill in at least one address.(erc20Address or bep20Address or trc20Address)`
        }
    },
    changeLang: (lang: Lang) => {
        required(lang, 'string', 'lang')
        checkArr(lang, ['en', 'zh', 'zh-hk'], 'lang')
    },
    getSupportCoins: () => {
        // null
    },
    createOrder: (chainCode: ChainCode, coinCode: CoinCode, amount: number) => {
        if (!chainCode && !coinCode && !amount) {
            throw 'Please pass in parameters.(Example createOrder("ERC20","usdt",1))'
        }
        required(chainCode, 'string', 'chainCode')
        checkArr(chainCode, ['ERC20', 'BEP20', 'TRC20'], 'chainCode')
        required(coinCode, 'string', 'coinCode')
        checkArr(coinCode, ['usdt', 'busd'], 'coinCode')
        required(amount, 'number', 'amount')
    },
    getCurrencyRate: (chainCode: ChainCode, coin: CoinCode, currency: Currency) => {
        required(chainCode, 'string', 'chainCode')
        checkArr(chainCode, ['erc20', 'bep20', 'trc20'], 'chainCode')
        required(coin, 'string', 'coin')
        checkArr(coin, ['usdt', 'busd'], 'coin')
        required(currency, 'string', 'currency')
        checkArr(currency, ['USD', 'HKD', 'CNY'], 'currency')
    },
    login: (loginRes: LoginRes) => {
        required(loginRes, 'object', 'loginRes')
        const { eth, bsc, tron, url } = loginRes
        if (!eth && !bsc && !tron) {
            throw 'Please pass in parameters.(Example login({eth:5,bsc:97,tron:"shasta"})'
        }
        typeCheck(eth, 'number', 'eth')
        if (eth) {
            checkArr(eth, [1, 3, 5, 42], 'eth')
        }
        typeCheck(bsc, 'number', 'bsc')
        if (bsc) {
            checkArr(bsc, [56, 97], 'bsc')
        }
        typeCheck(tron, 'string', 'tron')
        if (tron) {
            checkArr(tron, ['mainnet', 'shasta'], 'tron')
        }
        typeCheck(url, 'string', 'string')
    },
    pay: (amount: number, currency: Currency, callbackURL: string) => {
        required(amount, 'number', 'amount')
        required(currency, 'string', 'currency')
        checkArr(currency, ['USD', 'HKD', 'CNY'], 'currency')
        typeCheck(callbackURL, 'string', 'callbackURL')
    },
    getURL: (order: Order) => {
        required(order, 'object', 'order')
    }
}

export default check