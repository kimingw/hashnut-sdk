import { checkPhone, ethConfig, randomString } from '../../utils'
import { LOGINAPP, LOGINDAPP } from '../../static/constant'
import { rightIcon, phoneIcon, pcIcon, closeIcon } from '../../static/svg'
import QRCode from 'qrcode'
import { ethers } from "ethers";


function Login({ configure, emit }: any) {
    const { loginInfo } = configure
    const { loginRes, callback } = loginInfo
    const { eth, bsc, tron, url, } = loginRes
    const { setHideMask } = emit

    // phone,pc
    const [showState, setShowState] = useState('phone')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const bandleLogin = (type: string, chain: string, chainId: any) => {
        switch (type) {
            case 'metamask':
                if (!window.isHashNutPhone && !window.ethereum) {
                    window.open('https://metamask.io/download/', '_blank')
                    return
                } else {
                    setLoading(true)
                    loginEth(chainId, (res: any, error: any) => {
                        if (error) {
                            setLoading(false)
                            callback && callback(null, error)
                        } else {
                            const LOGIN_TEMP = 'I am signing one-time nonce: #N timestamp: #T chain: #C to login #D'
                            const nonce = randomString(16)
                            const timestamp = new Date().getTime() + ''
                            const chainName = chain
                            const account = res
                            const message = LOGIN_TEMP.replace('#N', nonce).replace('#T', timestamp).replace('#D', account).replace("#C", chainName)
                            window.ethereum.request({ method: 'personal_sign', params: [message, account] })
                                .then(function (sign: string) {
                                    const ethRecover = (sign: any, message: any, address: any) => {
                                        const pk = ethers.utils.verifyMessage(message, sign)
                                        return pk.toLowerCase() === address.toLowerCase()
                                    }
                                    const verifyBoolean = ethRecover(sign, message, account)
                                    callback && callback({
                                        chainId,
                                        chainName,
                                        sign,
                                        message,
                                        account,
                                        verifyBoolean
                                    }, null, (done: any) => {
                                        if (done) {
                                            setHideMask(true)
                                        }
                                        else {
                                            setLoading(false)
                                        }
                                    })

                                })
                                .catch(function (error: any) {
                                    setLoading(false)
                                    callback && callback(null, error)
                                })
                        }
                    })
                }
                break;
            case 'tronlink':
                if (!window.isHashNutPhone && !window.tronLink) {
                    window.open('https://www.tronlink.org/cn/', '_blank')
                    return
                } else {
                    setLoading(true)
                    loginTron(chainId, (res: any, error: any) => {
                        if (error) {
                            setLoading(false)
                            callback && callback(null, error)
                        } else {
                            const LOGIN_TEMP = 'I am signing one-time nonce: #N timestamp: #T chain: #C to login #D'
                            const nonce = randomString(16)
                            const timestamp = new Date().getTime() + ''
                            const chainName = chain
                            const account = res
                            const message = LOGIN_TEMP.replace('#N', nonce).replace('#T', timestamp).replace('#D', account).replace("#C", chainName)
                            window.tronWeb.trx.sign(window.tronWeb.toHex(message))
                                .then(async function (res: any) {
                                    if (typeof res === 'string') {
                                        // TODO
                                        const verifyBoolean = await window.tronWeb.trx.verifyMessage(window.tronWeb.toHex(message), res, account)
                                        callback && callback({
                                            chainId,
                                            chainName,
                                            sign: res,
                                            message,
                                            account,
                                            verifyBoolean
                                        }, null, (done: any) => {
                                            if (done) {
                                                setHideMask(true)
                                            }
                                            else {
                                                setLoading(false)
                                            }
                                        })
                                    }
                                    else {
                                        throw new Error(res ? res.message : 'error');
                                    }
                                })
                                .catch(function (error: any) {
                                    setLoading(false)
                                    callback && callback(null, error)
                                })
                        }
                    })
                }
                break;
        }
    }

    const loginEth = (chainId: number, cb: any) => {
        var ethereum = window.ethereum
        ethereum.request({ method: 'eth_requestAccounts' })
            .then(function (accountRes: any) {
                if (Number(window.ethereum.networkVersion) !== chainId) {
                    var chainIdHex = '0x' + chainId.toString(16)
                    ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: chainIdHex }],
                    })
                        .then(function (res: any) {
                            cb(accountRes[0], null)
                        })
                        .catch(function (error: any) {
                            if (error.code === 4902 && !window.ethereum.isTokenPocket) {
                                var obj = ethConfig(chainId)
                                ethereum.request({
                                    method: 'wallet_addEthereumChain',
                                    params: [{
                                        chainId: chainIdHex,
                                        chainName: obj.chainName,
                                        rpcUrls: obj.rpcUrls,
                                    }],
                                })
                                    .then(function (res: any) {
                                        cb(accountRes[0], null)
                                    })
                                    .catch(function (error: any) {
                                        cb(null, error)
                                    });
                            }
                            else cb(null, error)
                        })
                }
                else cb(accountRes[0], null)
            })
            .catch(function (error: any) {
                cb(null, error)
            });
    }
    const loginTron = (chainId: number | string, cb: any) => {
        var host = window.tronWeb.fullNode.host
        if (host.indexOf('shasta') === -1 && chainId === 'shasta') {
            cb(null, 'Please switch to Shasta network')
            return
        }
        if (host.indexOf('shasta') !== -1 && chainId === 'mainnet') {
            cb(null, 'Please switch to Mainnet network')
            return
        }
        if (window.imToken && window.tronWeb) {
            var address = window.tronWeb.defaultAddress.base58
            cb(address, null)
            return
        }
        window.tronLink.request({ method: 'tron_requestAccounts' })
            .then(function (res: any) {
                var address = window.tronWeb.defaultAddress.base58
                cb(address, null)
            })
            .catch(function (err: any) {
                if (err.message === '') {
                    cb(null, new Error("Unlock your tronlink"))
                }
                else cb(null, err)
            })
    }

    const renderCanvas = (qrImageCanvas: any) => {
        if (qrImageCanvas) {
            QRCode.toCanvas(window.location.href, {
                errorCorrectionLevel: "H",//容错率L（低）H(高)
                margin: 0,//二维码内边距，默认为4。单位px
                height: 300,//二维码高度
                width: 300,//二维码宽度
                color: {
                    dark: '#000000', // 二维码背景颜色
                    light: '#ffffff' // 二维码前景颜色
                },
            }).then((canvas: any) => {
                qrImageCanvas.append(canvas)
            }).catch((err: any) => {
                console.log(err)
            })
        }
    }

    const renderContent = () => {
        if (showState === 'phone') {
            return (
                <>
                    {/* 列表 */}
                    {checkPhone() && !window.tronLink && !window.ethereum ?
                        <div className="hashNutAppList">
                            {LOGINAPP(url || window.location.href).map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <a className="hashNutAccountItem" href={item.src}>
                                            <div className="hashNutAccountItemTitle">{item.name}</div>
                                            <img src={item.icon} className="hashNutAppRightIcon" />
                                            <div className="hashNutAppRightIconPoint">
                                                {rightIcon}
                                            </div>
                                        </a>
                                        {LOGINAPP(url || window.location.href).length >= index && <div className="hashNutAccountItemLine"></div>}
                                    </React.Fragment>
                                )
                            })}
                        </div> :
                        <div className="hashNutAccountList">
                            {LOGINDAPP({ eth, bsc, tron }).map((item: any, index: number) => {
                                if (!(checkPhone() && item.appNeed)) {
                                    return (
                                        <React.Fragment key={index}>
                                            <div onClick={() => { bandleLogin(item.type, item.chain, item.chainId) }} className="hashNutAccountItem">
                                                <div className="hashNutAccountItemIcon">
                                                    {item.coinIcon}
                                                </div>
                                                <div className="hashNutAccountItemTitle">{item.type === 'metamask' && !checkPhone() && !window.ethereum ? 'Install MetaMask' :
                                                    item.type === 'tronlink' && !checkPhone() && !window.tronLink ? 'Install MetaMask' :
                                                        item.name}
                                                </div>
                                            </div>
                                            {LOGINDAPP({ eth, bsc, tron }).length - 1 > index && <div className="hashNutAccountItemLine"></div>}
                                        </React.Fragment>
                                    )
                                }
                            })}
                        </div>}
                </>
            )
        } else {
            return (
                <>
                    {/* 二维码 */}
                    <div>
                        <div className="hashNutQrBoxTitle">Scan QR code with imToken, MetaMask, TronkLink Pro,TokenPocket App</div>
                        <div className="hashNutQrBoxImage">
                            <div ref={(qrImageCanvas) => { renderCanvas(qrImageCanvas) }} className="hashNutQrBoxImageCanvas" title="https://kimingw.github.io/pay-demo/dist/index.html">
                                {/* canvas */}
                            </div>
                        </div>
                        <div className="hashNutQrBoxDesc">If the wallet APP does not support scanning QR code, you can try to copy the URL to the APP to open it.</div>
                    </div>
                </>
            )
        }
    }

    return (
        <div className="hashNutContent">
            <div className="hashNutHeader">
                <div className="hashNutTitle">Login</div>
                <div className="hashNutClose" onClick={() => { setHideMask(true) }}>
                    {closeIcon}
                </div>
            </div>
            {/* 加载中 */}
            {loading ?
                <div className="hashNutAmountBoxItemLoadShow">
                    <span></span><span></span><span></span><span></span><span></span>
                </div> :
                <>
                    {renderContent()}
                    {/* 切换 */}
                    <div className="hashNutUsePhoneBtnBox">
                        <div className="hashNutUsePhoneBtn" onClick={() => { setShowState(showState === 'phone' ? 'pc' : 'phone') }}>
                            {
                                showState === 'phone' ?
                                    <>
                                        <div className="hashNutUsePhoneBtnIcon">
                                            {phoneIcon}
                                        </div>
                                        <div className="hashNutUsePhoneBtnName">In mobile use</div>
                                    </>
                                    :
                                    <>
                                        <div className="hashNutUsePhoneBtnIcon">
                                            {pcIcon}
                                        </div>
                                        <div className="hashNutUsePhoneBtnName">In PC use</div>
                                    </>
                            }
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Login