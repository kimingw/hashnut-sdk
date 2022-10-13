import { checkPhone } from '../../utils'
import { LOGINAPP } from '../../static/constant'
import { rightIcon } from '../../static/svg'

function Login({ configure }: any) {
    const { loginInfo } = configure
    const { eth, bsc, tron, url } = loginInfo

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="hashNutContent">
            <div className="hashNutHeader">
                <div className="hashNutTitle">Login</div>
                <div className="hashNutClose">
                    <svg viewBox="0 0 1024 1024" width="30" height="30"><path fill="currentColor" fillRule="evenodd" d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM672 627.2c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0L512 556.8l-115.2 115.2c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8L467.2 512 352 396.8C339.2 384 339.2 364.8 352 352s32-12.8 44.8 0L512 467.2l115.2-115.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L556.8 512 672 627.2z"></path></svg>
                </div>
            </div>
            {/* 加载中 */}
            {loading ?
                <div className="hashNutAmountBoxItemLoadShow">
                    <span></span><span></span><span></span><span></span><span></span>
                </div> :
                <>
                    {/* 列表 */}
                    <div className="hashNutAppList">
                        {LOGINAPP(url || window.location.href).map((item, index) => {
                            return (
                                <a key={index} className="hashNutAccountItem" href={item.src}>
                                    <div className="hashNutAccountItemTitle">{item.name}</div>
                                    <img src={item.icon} className="hashNutAppRightIcon" />
                                    <div className="hashNutAppRightIconPoint">
                                        {rightIcon}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    {/* <div className="hashNutAccountList">
                        <div className="hashNutAccountItem" data-index="0">
                            <div className="hashNutAccountItemIcon">
                                <svg width="18px" height="18px" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39"><g><g><g><polygon fill="rgb(183,250,255)" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "></polygon><polygon fill="rgb(204,196,247)" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "></polygon><polygon fill="rgb(199,176,246)" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "></polygon><polygon fill="rgb(137,170,243)" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89 "></polygon><polygon fill="rgb(199,176,246)" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33 "></polygon><polygon fill="rgb(137,170,243)" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33 "></polygon></g></g></g></svg>
                            </div>
                            <div className="hashNutAccountItemTitle">Goerli Test Network</div>
                        </div>
                        <div className="hashNutAccountItemLine"></div>
                        <div className="hashNutAccountItem" data-index="1">
                            <div className="hashNutAccountItemIcon">
                                <svg width="32px" height="32px" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 2496 2496"><g><path fill="#F0B90B" d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248 S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"></path><path fill="#FFFFFF" d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3 l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4 L1084.3,821.4z"></path><path fill="#FFFFFF" d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6 l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918 L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578 L1809.2,1578z"></path><polygon fill="#FFFFFF" points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6 	"></polygon><path fill="#FFFFFF" d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4 L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6 l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"></path></g></svg>
                            </div>
                            <div className="hashNutAccountItemTitle">Binance Smart Chain Testnet</div>
                        </div>
                        <div className="hashNutAccountItemLine"></div>
                        <div className="hashNutAccountItem" data-index="2">
                            <div className="hashNutAccountItemIcon">
                                <svg width="18px" height="18px" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 64 64"><g><path fill="currentColor" fillRule="evenodd" d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"></path></g></svg>
                            </div>
                            <div className="hashNutAccountItemTitle">TronkLink Shasta</div>
                        </div>
                    </div> */}
                    {/* 二维码 */}
                    <div className="hashNutHide">
                        <div className="hashNutQrBoxTitle">Scan QR code with imToken, MetaMask, TronkLink Pro,TokenPocket App</div>
                        <div className="hashNutQrBoxImage">
                            <div className="hashNutQrBoxImageCanvas" title="https://kimingw.github.io/pay-demo/dist/index.html">
                                <canvas width="300" height="300" style={{ display: 'none' }}></canvas>
                                {/* <img src="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" style="display: block;"> */}
                            </div>
                        </div>
                        <div className="hashNutQrBoxDesc">If the wallet APP does not support scanning QR code, you can try to copy the URL to the APP to open it.</div>
                    </div>
                    {/* 切换 */}
                    <div className="hashNutUsePhoneBtnBox">
                        <div className="hashNutUsePhoneBtn">
                            <div className="hashNutUsePhoneBtnIcon">
                                <svg viewBox="0 0 1024 1024" className="_titleRightBtnIcon_lmedj_25" width="16" height="16"><path fill="currentColor" fillRule="evenodd" d="M661.333333 42.666667H320c-58.88 0-106.666667 47.786667-106.666667 106.666666v725.333334c0 58.88 47.786667 106.666667 106.666667 106.666666h341.333333c58.88 0 106.666667-47.786667 106.666667-106.666666V149.333333c0-58.88-47.786667-106.666667-106.666667-106.666666z m-170.666666 896c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z m192-170.666667H298.666667V170.666667h384v597.333333z"></path></svg>
                            </div>
                            <div className="hashNutUsePhoneBtnName">In mobile use</div>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Login