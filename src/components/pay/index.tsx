import { PAYUI } from '../../static/constant'
import { closeIcon, doubleArrowRight } from '../../static/svg'
import { formatNumber } from '../../utils'
import { projectName } from '../../config'
import allTextMap from '../../static/lang'
import style from './index.module.css'

function Pay({ configure, emit }: PayParams) {
    const { address, lang, payInfo } = configure
    const [renderArr, setRenderArr] = useState([])
    const { amount, currency, callback, callbackURL } = payInfo
    const { setHideMask } = emit
    const textMap = allTextMap[lang]

    const [active, setActive] = useState(0)
    const [activeCoin, setActiveCoin] = useState(0)
    const [rate, setRate] = useState(0)
    const [amountRate, setAmountRate] = useState(0)

    useEffect(() => {
        const arr = []
        for (let key in address) {
            // @ts-ignore
            if (address[key] && address[key].length > 0 && PAYUI[key]) {
                arr.push(PAYUI[key])
            }
        }
        console.log(renderArr)
        setRenderArr(arr)
    }, [])

    useEffect(() => {
        if (renderArr.length > 0) {
            fetchRate()
        }
    }, [renderArr])


    const fetchRate = async () => {
        const chainCode = renderArr[active]?.name
        const coin = renderArr[active]?.coins[activeCoin].name
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
        const chainCode = renderArr[active].name
        const coin = renderArr[active].coins[activeCoin].name
        window[projectName].createOrder(chainCode, coin, amount, (res: any) => {
            if (res.count === 0) {
                callback && callback(res.data, callbackURL)
                window.location.href = window[projectName].getURL(res.data, window.location.href)
            }
        })
    }

    return (
        <div className={style.hashNutContent}>
            <div className={style.hashNutHeader}>
                <div className={style.hashNutTitle}>{textMap['Checkout']}</div>
                <div className={style.hashNutClose} onClick={() => { setHideMask(true) }}>
                    {closeIcon}
                </div>
            </div>
            <div className={style.hashNutLine}>
                <div className={style.hashNutLineTitle}>{textMap['Select chain']}</div>
                <div className={style.hashNutSelectBox}>
                    {renderArr.map((item: any, index: number) => {
                        return (
                            <div onClick={() => { bandleChangeChain(index) }} className={`${renderArr.length > 3 ? style.hashNutSelectItemWidth : ''} ${style.hashNutSelectItem} ${active === index ? style.hashNutSelectItemActive : ''}`} key={index}>{item.name}</div>
                        )
                    })}
                </div>
            </div>
            <div className={style.hashNutLine}>
                <div className={style.hashNutLineTitle}>{textMap['Select coin']}</div>
                <div className={style.hashNutSelectBox}>
                    {renderArr[active] && renderArr[active].coins.map((item: any, index: number) => {
                        return (
                            <div onClick={() => {
                                bandleChangeCoin(index)
                            }} key={index} className={!item.icon && !item.name ? style.hashNutSelectItemNull : `${style.hashNutSelectItem} ${activeCoin === index ? style.hashNutSelectItemActive : ''}`}>
                                {item.icon}
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={style.hashNutLine}>
                <div className={style.hashNutLineTitle}>{textMap['Amount']}</div>
                <div className={style.hashNutAmountBox}>
                    <div className={style.hashNutAmountBoxItem}>
                        <span>{amount && formatNumber(amount)}</span>
                        {currency}
                    </div>
                    <div className={style.hashNutAmountBoxFlag}>
                        {doubleArrowRight}
                    </div>
                    <div className={`${style.hashNutAmountBoxItem} ${style.hashNutAmountBoxItemPointer}`} style={amountRate === 0 ? { display: 'none' } : { display: 'block' }}>
                        <span>{amountRate}</span>
                        {renderCoinName()}
                    </div>
                    <div className={`${amountRate === 0 ? style.hashNutAmountBoxItemLoadShow : style.hashNutAmountBoxItemLoadHide} `}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>
            <div className={style.hashNutCurrencyDesc}>{textMap['Reference Rates']} 1 {renderCoinName()} ≈ {rate} {currency}</div>
            <div className={style.hashNutOrderBtn} onClick={() => { bandleConfirm() }}>{textMap['Confirm']}</div>
            <div className={style.hashNutOrderBtnHide}>
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className={style.hashNutOrderError}></div>
        </div>
    )
}

export default Pay