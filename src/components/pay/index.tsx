import { PAYUI } from '../../static/constant'
import { closeIcon, doubleArrowRight } from '../../static/svg'
import { formatNumber } from '../../utils'
import { projectName } from '../../config'

function Pay({ configure }: any) {
    const { address, lang, payInfo } = configure
    const [renderArr, setRenderArr] = useState([])
    const { amount, currency } = payInfo

    const [active, setActive] = useState(0)
    const [activeCoin, setActiveCoin] = useState(0)
    const [rate, setRate] = useState(0)
    const [amountRate, setAmountRate] = useState(0)

    useEffect(() => {
        const arr = []
        for (let key in address) {
            if (address[key].length > 0 && PAYUI[key]) {
                arr.push(PAYUI[key])
            }
        }
        setRenderArr(arr)

    }, [])

    useEffect(() => {
        if (renderArr.length > 0) {
            fetchRate()
        }
    }, [renderArr])


    const fetchRate = async () => {
        const chainCode = renderArr[active].name.toLocaleLowerCase()
        const coin = renderArr[active].coins[activeCoin].name
        window[projectName].getCurrencyRate(chainCode, coin, currency, (res: any) => {
            setRate(res.data.rate)
            setAmountRate(formatNumber((amount / res.data.rate).toFixed(2)))
        })
    }

    const renderCoinName = () => {
        return renderArr[active]?.coins[activeCoin]?.name.toLocaleUpperCase()
    }

    const bandleChangeChain = (index: number) => {

        setActive(index)
        setActiveCoin(0)

        fetchRate()
    }
    const bandleChangeCoin = (index: number) => {
        setActiveCoin(index)

        fetchRate()
    }

    const bandleConfirm = () => {
        const chainCode = renderArr[active].name.toLocaleLowerCase()
        const coin = renderArr[active].coins[activeCoin].name
        window[projectName].createOrder(chainCode, coin, amount, (res: any) => {
            if (res.count === 0) {
                window.location.href = window[projectName].getURL(res.data, window.location.href)
            }
        })
    }

    return (
        <div className="hashNutContent">
            <div className="hashNutHeader">
                <div className="hashNutTitle">Checkout</div>
                <div className="hashNutClose">
                    {closeIcon}
                </div>
            </div>
            <div className="hashNutLine">
                <div className="hashNutLineTitle">Select chain</div>
                <div className="hashNutSelectBox">
                    {renderArr.map((item: any, index: number) => {
                        return (
                            <div onClick={() => { bandleChangeChain(index) }} className={`hashNutSelectItem ${active === index ? 'hashNutSelectItemActive' : ''}`} key={index}>{item.name}</div>
                        )
                    })}
                </div>
            </div>
            <div className="hashNutLine">
                <div className="hashNutLineTitle">Select coin</div>
                <div className="hashNutSelectBox">
                    {renderArr[active] && renderArr[active].coins.map((item: any, index: number) => {
                        return (
                            <div onClick={() => {
                                bandleChangeCoin(index)
                            }} key={index} className={!item.icon && !item.name ? 'hashNutSelectItemNull' : `hashNutSelectItem ${activeCoin === index ? 'hashNutSelectItemActive' : ''}`}>
                                {item.icon}
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="hashNutLine">
                <div className="hashNutLineTitle">Amount</div>
                <div className="hashNutAmountBox">
                    <div className="hashNutAmountBoxItem">
                        <span>{amount && formatNumber(amount)}</span>
                        {currency}
                    </div>
                    <div className="hashNutAmountBoxFlag">
                        {doubleArrowRight}
                    </div>
                    <div className="hashNutAmountBoxItem hashNutAmountBoxItemPointer" style={amountRate === 0 ? { display: 'none' } : { display: 'block' }}>
                        <span>{amountRate}</span>
                        {renderCoinName()}
                    </div>
                    <div className={`${amountRate === 0 ? 'hashNutAmountBoxItemLoadShow' : 'hashNutAmountBoxItemLoadHide'} `}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>
            <div className="hashNutCurrencyDesc">Reference Rates 1 {renderCoinName()} ≈ {rate} {currency}</div>
            <div className="hashNutOrderBtn" onClick={() => { bandleConfirm() }}>Confirm</div>
            <div className="hashNutOrderBtnHide">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="hashNutOrderError"></div>
        </div>
    )
}

export default Pay