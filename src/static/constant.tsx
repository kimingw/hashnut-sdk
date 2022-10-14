import { ethUsdc, ethUsdt, bscBusd, trxUsdt, imTokenIcon, tokenPocketIcon, metaMaskIcon, ethIcon, bscIcon, tronIcon } from './svg'
import { getChainName } from '../utils'

const LOGINAPP = (url: string) => {
    return [
        { name: 'imToken', src: 'imtokenv2://navigate/DappView?url=' + encodeURIComponent(url), icon: imTokenIcon },
        { name: 'TokenPocket', src: 'tpdapp://open?params={"url": "' + url + '"}', icon: tokenPocketIcon },
        { name: 'MetaMask', src: 'https://metamask.app.link/dapp/' + url, icon: metaMaskIcon },
    ]
}

const LOGINDAPP = (coins: any) => {
    const { eth, bsc, tron } = coins
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
    return [
        { name: getChainName(eth), coinIcon: ethIcon, type: 'metamask', chain: 'ETH', chainId: eth, appNeed: judgeAppNeed('eth') },
        { name: getChainName(bsc), coinIcon: bscIcon, type: 'metamask', chain: 'BSC', chainId: bsc, appNeed: judgeAppNeed('bsc') },
        { name: getChainName(tron), coinIcon: tronIcon, type: 'tronlink', chain: 'TRX', chainId: tron, appNeed: judgeAppNeed('tron') },
    ]
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