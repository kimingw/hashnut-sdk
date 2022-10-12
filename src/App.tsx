import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'tronweb'
import { ethers } from "ethers";
import { useStore } from './store/createStroe'
import { Login, Pay } from './components'

// console.log('TronWeb', window.tronWeb.trx)
// console.log('ethers', ethers)

const hashnutId = document.getElementById('hashnut')

function App() {
  const { mask, setMask } = useStore()

  window.HashNut = {
    login: () => {
      setMask('login')
    },
    pay: () => {
      setMask('pay')
    }
  }

  if (mask) {
    switch (mask) {
      case 'login':
        return (ReactDOM.createPortal(<Login />, hashnutId ? hashnutId : document.body))
      case 'pay':
        return (ReactDOM.createPortal(<Pay />, hashnutId ? hashnutId : document.body))
    }
  }
  return <></>
}

export default App
