const searchProduct = document.querySelector('#buscar-producto');
const productsList = document.querySelector('#products');
const categoryList = document.querySelector("#category-list");
const searchMessage = document.querySelector('#search-message');
const errorSearch = document.querySelector('#error-search');

let arrayProducts = [];
let existAnError = false;

//Carga Inicial
window.addEventListener('DOMContentLoaded', async() => {

    if(!existAnError) renderLoadSpinner();
    else renderError();

    //!Carga las categorias
    const categoriesData = await loadCategories();
    renderCategories(categoriesData);//!Muestro las categorias en el boton

    //!Carga inicial de los productos
    const productsData = await loadProducts();
    arrayProducts = productsData
    renderProducts(arrayProducts);
});