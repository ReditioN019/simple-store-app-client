const sortLowToHigh = () => {
    const products = arrayProducts.sort((a,b) => a.price > b.price ? 1 : -1)
    renderProducts(products);
}

const sortHighToLow = () => {
    const products = arrayProducts.sort((a,b) => a.price < b.price ? 1 : -1 )
    renderProducts(products)
}

const sortNameAZ = () => {
    const products = arrayProducts.sort((a,b) => a.name > b.name ? 1 : -1)
    renderProducts(products)
}

const sortNameZA = () => {
    // const products = arrayProducts.sort((a,b) => a.name < b.name ? 1: )
    const products = arrayProducts.sort((a,b) => {
        if(a.name < b.name){
            return 1
        }
        return -1
    })

    renderProducts(products)
}

const sortForDiscount = () => {
    const products = arrayProducts.sort((a,b) => {
        if(a.discount < b.discount){
            return 1
        }
        return -1
    })

    renderProducts(products)
}