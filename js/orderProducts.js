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
    const products = arrayProducts.sort((a,b) => a.name < b.name ? 1: -1)
    renderProducts(products)
}

const sortForDiscount = () => {
    const products = arrayProducts.sort((a,b) => a.discount < b.discount ? 1 : -1)
    renderProducts(products)
}