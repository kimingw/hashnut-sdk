
export const useCoins = ({ erc20Address, bep20Address, trc20Address }: AddressProps): Coins => {
    const coins: Coins = []
    if (erc20Address && erc20Address.length > 0) {
        coins.push({ chainCode: 'erc20', coinCode: 'usdt' })
        coins.push({ chainCode: 'erc20', coinCode: 'usdc' })
    }
    if (bep20Address && bep20Address.length > 0) {
        coins.push({ chainCode: 'bsc', coinCode: 'busd' })
    }
    if (trc20Address && trc20Address.length > 0) {
        coins.push({ chainCode: 'trc20', coinCode: 'usdt' })
    }
    return coins
}