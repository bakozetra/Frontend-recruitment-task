export const getRamdomJoke = async (category = '', firstName = "Chuck", lastName = "Norris") => {
    const categoriesParamas = category ? `&limitTo=[${category}]` : ''
    const URL = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}${categoriesParamas}`
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export const getCategories = async () => {
    const urlCategory = "https://api.icndb.com/categories"
    const response = await fetch(urlCategory)
    const data = await response.json()
    return data
}



