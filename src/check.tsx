const isTypeof = (param: any) => {
    return Object.prototype.toString.call(param).slice(8, -1).toLowerCase()
}

const check: any = {
    init: (configuration: any) => {
        if (!configuration) {
            throw 'Please pass in parameters'
        } else if (isTypeof(configuration) !== 'object') {
            throw `The parameter type is ${isTypeof(configuration)} and should be object`
        }
        const { erc20Address, bep20Address, trc20Address } = configuration
        if (!erc20Address && !bep20Address && !trc20Address) {
            throw `Fill in at least one address.(erc20Address or bep20Address or trc20Address)`
        }
    }
}

export default check