const loadProducts = async() => {
    try{
        const resp = await fetch('https://srojo-simple-store-app.herokuapp.com/v1/api/products');

        if(!resp.ok){
            renderError()
            existAnError = true;
            throw "Error al obtener los productos";
        } 
        
        return await resp.json();;

    }catch(error){
        throw error
    }
}

searchProduct.addEventListener('keyup', e => {
    fetch('https://srojo-simple-store-app.herokuapp.com/v1/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ payload: e.target.value })   
    }).then(res => res.json()).then(data => {

        if(data.payload.length === 0){
            renderProducts([]);
        }
        else{
            let payload = data.payload;
            renderProducts(payload);
        }  
    })
    .catch(err => searchError());
})



const loadCategories = async() => {
    try {
        const resp = await fetch('https://srojo-simple-store-app.herokuapp.com/v1/api/category')

        if(!resp.ok) {
            renderError()
            existAnError = true;
            throw "Error al cargar las categorías";
        }
        return await resp.json();

    } catch (error) {
        throw error
    }
}

const loadProductsByCategory = async(id) => {
    try {
        const resp = await fetch(`https://srojo-simple-store-app.herokuapp.com/v1/api/category/${id}`)

        if(!resp.ok){
            renderError()
            existAnError = true;
            throw "Error al cargar los productos según la categoría"
        } 
    
        return await resp.json()

    } catch (error) {
        throw error
    }
}

