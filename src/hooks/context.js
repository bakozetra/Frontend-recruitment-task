import React, { createContext, useEffect, useState, } from 'react'
import { getCategories, getRamdomJoke } from '../data/data'

const ContextValue = createContext()

function ContextProvider({ children }) {
    const [randomJoke, setRandomJoke] = useState([])
    const [categoryName, setCategoryName] = useState([])

    const getInitialJoke = async () => {
        const joke = await getRamdomJoke()
        setRandomJoke(joke)
        const categories = await getCategories()
        setCategoryName(categories)
    }

    useEffect(() => {
        getInitialJoke()
    }, [])

    return <ContextValue.Provider value={{ randomJoke, setRandomJoke, categoryName }}>
        {children}
    </ContextValue.Provider>
}

export { ContextValue, ContextProvider }

