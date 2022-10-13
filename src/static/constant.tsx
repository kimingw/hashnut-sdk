import { ethUsdc, ethUsdt, bscBusd, trxUsdt, imTokenIcon, tokenPocketIcon, metaMaskIcon } from './svg'


const LOGINAPP = (url: string) => {
    return [
        { name: 'imToken', src: 'imtokenv2://navigate/DappView?url=' + encodeURIComponent(url), icon: imTokenIcon },
        { name: 'TokenPocket', src: 'tpdapp://open?params={"url": "' + url + '"}', icon: tokenPocketIcon },
        { name: 'MetaMask', src: 'https://metamask.app.link/dapp/' + url, icon: metaMaskIcon },
    ]
}

// const LOGINAPP: any = [
//     { name: 'imToken', src: 'imtokenv2://navigate/DappView', icon: imTokenIcon },
//     { name: 'TokenPocket', src: 'tpdapp://open', icon: tokenPocketIcon },
//     { name: 'MetaMask', src: 'https://metamask.app.link/dapp/', icon: metaMaskIcon },
// ]

const PAYUI: any = {
    erc20Address: {
        name: 'ERC20',
        coins: [
            {
                name: 'usdt',
                icon: ethUsdt
            },
            {
                name: 'usdc',
                icon: ethUsdc
            },
        ]
    },
    bep20Address: {
        name: 'BEP20',
        coins: [
            {
                name: 'busd',
                icon: bscBusd
            }, {}
        ]
    },
    trc20Address: {
        name: 'TRC20',
        coins: [
            {
                name: 'usdt',
                icon: trxUsdt
            }, {}
        ]
    },
}

export { PAYUI, LOGINAPP }