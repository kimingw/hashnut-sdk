import style from './index.module.css'

interface prop {
    children: JSX.Element[] | JSX.Element
    paramObject: any
}

const Mask = (prop: prop) => {
    const { children, paramObject } = prop
    const { mask, setMask, hideMask, setHideMask } = paramObject
    const [dom, setDom] = useState(false)
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (hideMask) {
            setShow(false)
        }
    }, [hideMask])

    useEffect(() => {
        if (typeof (mask) === 'string') {
            setDom(true)
            setShow(true)
        } else {
            console.log('mask')
            setShow(false)
        }
    }, [mask])
    const _renderChildren = useCallback(() => {
        return children
    }, [dom])
    const closeAnima = (e: any) => {
        if (e.animationName.indexOf('hide') !== -1) {
            setDom(false)
            setMask(null)
            setHideMask(false)
        }
    }
    return (
        <div className={dom ? style.block : style.none}>
            <div className={`${style.maskBg} ${show ? style.show : style.hide}`} onClick={() => { setShow(false) }} onAnimationEnd={(e) => { closeAnima(e) }}></div>
            <div className={`${style.mask} ${show ? style.big : style.small}`}>
                {_renderChildren()}
            </div>
        </div>
    )
}

export default Mask