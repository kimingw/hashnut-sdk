import { useEffect, useState } from 'react'

const Store = (): any => {
    // 控制弹窗
    const [mask, setMask] = useState(null)
    
    return {
        mask,
        setMask,
    }
}

export default Store