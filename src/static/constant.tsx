import { ethUsdc, ethUsdt, bscBusd, trxUsdt, imTokenIcon, tokenPocketIcon, metaMaskIcon, ethIcon, bscIcon, tronIcon } from './svg'
import { getChainName } from '../utils'

const LOGINAPP = (url: string) => {
    return [
        { name: 'imToken', src: 'imtokenv2://navigate/DappView?url=' + encodeURIComponent(url), icon: imTokenIcon },
        { name: 'TokenPocket', src: 'tpdapp://open?params={"url": "' + url + '"}', icon: tokenPocketIcon },
        { name: 'MetaMask', src: 'https://metamask.app.link/dapp/' + url, icon: metaMaskIcon },
    ]
}

const LOGINDAPP = (coins: LoginNet) => {
    const puts = []
    const judgeAppNeed = (name: string) => {
        switch (name) {
            case 'eth':
                return !window.ethereum
            case 'bsc':
                return (!window.ethereum || !window.imToken)
            case 'tron':
                return !window.tronLink
        }
    }
    const iconMap = {
        eth: ethIcon,
        bsc: bscIcon,
        tron: tronIcon
    }
    for (let key in coins) {
        // @ts-ignore
        coins[key] && puts.push({ name: getChainName(coins[key]), coinIcon: iconMap[key], type: 'metamask', chain: 'ETH', chainId: coins[key], appNeed: judgeAppNeed(key) })
    }
    return puts
}

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

export { PAYUI, LOGINAPP, LOGINDAPP }