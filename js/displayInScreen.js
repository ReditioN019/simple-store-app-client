const displayCategories = (categories) => categories.map((item) => (
    `
   <li>
       <a id="category" class="dropdown-item category"onClick="productsByCategory(${item.id})">${item.name}</a>   
   </li>     
   `
));


const createProductsItems = products => products.map(product => {
    const { name, price, url_image, discount } = product;
    return `   
            <div class="col-12 col-md-6 col-lg-3  mt-2 product">
                <div class="card shadow">
                <div class="card-header">
                    <img src="${url_image}" width="100%" height="200" alt="" class=" image mt-5 mb-5">
                </div>
                <div class="card-body">
                    <h6 class="card-title m-0 mb-2 text-success">${name}</h6>
                    <p class="">
                        ${
                            discount === 0 ? '' : discount+"%"
                        }
                    </p>
                    <div class="d-flex justify-content-between align align-items-center">
                    <h3 class="mt-2 price">$${price}</h3>
                    <button 
                        class="btn btn-primary" 
                        onclick="addProduct()"
                    >
                        <i class="fa-solid fa-cart-shopping cart"></i>
                    </button>  
                    </div>
                </div>
                </div>
            </div>
    `;
}).join('');


const productsByCategory = async(id) => {
    const productsByCategory = await loadProductsByCategory(id);
    arrayProducts = productsByCategory
    renderProducts(productsByCategory);
}

const allProducts = async() => {
    const allProducts = await loadProducts();
    arrayProducts = allProducts
    renderProducts(arrayProducts);
}

//!=================================================
//!==============MUESTRA EN PANTALLA================
//!=================================================

const renderLoadSpinner = () => {
    const loadSpinner = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
    productsList.innerHTML = loadSpinner;
}

const renderProducts = (products) => {
    const itemString = createProductsItems(arrayProducts);
    productsList.innerHTML = itemString;
}

const renderCategories = (categories) => {
    const item = displayCategories(categories);
    //Inserto al principio de la lista de categorías
    item.unshift(`
        <li>
            <a id="category" class="dropdown-item category" onClick="allProducts(0)">Todos</a>   
        </li>  
    `);
    categoryList.innerHTML = item.join('');
}


const renderError = () => {
    productsList.innerHTML =  `
        <div class="alert alert-danger" role="alert">
            <h2 class="text-center">Error al cargar datos</h2>
        </div>
    `;
}

const searchError = () => {
    errorSearch.innerHTML = "En estos momentos no se puede realizar la búsqueda"
}