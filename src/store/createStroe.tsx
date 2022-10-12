
import { useContext, createContext } from 'react'
import CreateStore from './index'

const storeContext = createContext(null)

export const StoreProvider = (porps: { children: any }): any => {
    const { children } = porps
    const store = CreateStore()
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = (): any => {
    const store = useContext(storeContext)
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('You have forgot to use StoreProvider, shame on you.')
    }
    return store
}
