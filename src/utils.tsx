import { projectName, urlPrefix } from './config'

const getUUID = (domain: string) => {
    var bin2hex = function (s: string) {
        var i, l, o = "", n
        s += ""
        for (i = 0, l = s.length; i < l; i++) {
            n = s.charCodeAt(i).toString(16)
            o += n.length < 2 ? "0" + n : n
        }
        return o
    }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var txt = domain;
    if (ctx === null) return ''
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    var b64 = canvas.toDataURL().replace("data:image/png;base64,", "");
    var bin = atob(b64);
    var crc = bin2hex(bin.slice(-28, -12));
    return crc;
}

const getAddress = (chainCode: string, addres: any) => {
    switch (chainCode) {
        case 'erc20':
            return addres.erc20Address
        case 'bep20':
            return addres.bep20Address
        case 'trc20':
            return addres.trc20Address
    }
}

const checkCurrency = (currency: string) => {
    var c = currency.toLocaleLowerCase()
    if (c === 'usd' || c === 'hkd' || c === 'cny') return c
    return null
}


const checkPhone = () => {
    return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPod') > -1 || navigator.userAgent.indexOf('Symbian') > -1
}

const getChainName = (id: number | string) => {
    if (id === 1) return 'Ethereum Mainnet'
    else if (id === 3) return 'Ropsten Test Network'
    else if (id === 4) return 'Rinkeby Test Network'
    else if (id === 5) return 'Goerli Test Network'
    else if (id === 42) return 'Kovan Test Network'
    else if (id === 56) return 'Binance Smart Chain Mainnet'
    else if (id === 97) return 'Binance Smart Chain Testnet'
    else if (id === 'mainnet') return 'TronkLink Mainnet'
    else if (id === 'shasta') return 'TronkLink Shasta'
    return ''
}

const randomString = (length: number) => {
    let text = ""
    const possible = '0123456789'
    for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return Number(text) + ''
}

const ethConfig = (id: number) => {
    if (id === 97) {
        return {
            chainName: "Binance Smart Chain Testnet",
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/']
        }
    }
    else if (id === 56) {
        return {
            chainName: "Binance Smart Chain Mainnet",
            rpcUrls: ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed2.binance.org",]
        }
    }
    else if (id === 3) {
        return {
            chainName: "Ropsten Test Network",
            rpcUrls: ['https://ropsten.infura.io/v3/']
        }
    }
    else if (id === 4) {
        return {
            chainName: "Ethereum Testnet Rinkeby",
            rpcUrls: ['https://rinkeby.infura.io/v3/']
        }
    }
    else if (id === 5) {
        return {
            chainName: "Goerli Test Network",
            rpcUrls: ['https://goerli.infura.io/v3/']
        }
    }
    else if (id === 42) {
        return {
            chainName: "Kovan Test Network",
            rpcUrls: ['https://kovan.infura.io/v3/']
        }
    }
    return {
        chainName: "Ethereum Testnet Rinkeby",
        rpcUrls: ['https://rinkeby.infura.io/v3/']
    }
}

const formatNumber = (num: any) => {
    num = (num.toString()).match(/(\d+\.\d{0,2})|(\d+)/)[0]
    if (!/\./.test(num)) num = num + '.00'

    else if (/\.\d{1}$/.test(num)) num = num + '0'
    return num
}

const createXHR = (url: string, method: string, data: any, sussCallback: any, failCallback: any, complete: any) => {
    const xhr = new XMLHttpRequest()
    let formData
    if (method === 'POST') {
        formData = new FormData()
        for (let key in data) {
            formData.append(key, data[key])
        }
    }
    let urlData = ""
    if (method === 'GET') {
        urlData = '?'
        for (let key in data) {
            urlData += `${key}=${data[key]}&`
        }
        urlData = urlData.slice(0, -1)
    }
    xhr.timeout = 15 * 1000
    xhr.onerror = function (e) {
        failCallback && failCallback('error')
    }
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            complete && complete()
            if (xhr.status == 200) {
                const message = JSON.parse(xhr.responseText)
                if (message.resultCode === 0) {
                    sussCallback && sussCallback(message)
                }
            }
        }
    }
    xhr.open(method, urlPrefix + url + urlData, true)
    xhr.setRequestHeader('version', 'v1.0.0');
    method === 'POST' ? xhr.send(formData) : xhr.send()
    return xhr
}

export {
    getUUID,
    getAddress,
    createXHR,
    formatNumber,
    checkCurrency,
    checkPhone,
    getChainName,
    randomString,
    ethConfig
}