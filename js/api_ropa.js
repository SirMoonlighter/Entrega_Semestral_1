

const fetchApi = async () => {
    console.log('Se llamó a fetchApi')
    const response = await fetch('http://fakestoreapi.com/products')
    const result = await response.json()
    return result
}

const loadProd = async () => {
    products = await fetchApi()
    products.forEach((product) => {
        clone_template = document.querySelector('#mini_producto').cloneNode(true)

        clone_template.querySelector('.name').innerHTML = product.title
        clone_template.querySelector('.image').src = product.image
        clone_template.querySelector('.desc').innerHTML = product.description
        clone_template.querySelector('.price').innerHTML = `Precio: $ ${product.price}`
        clone_template.querySelector('.ranking').innerHTML = `Ranking: ${product.rating.rate}/ 5.0`
        clone_template.querySelector('.ranking-count').innerHTML =`Cantidad de Reviews: ${product.rating.count}`
        clone_template.style.removeProperty('display')
        products_container = document.querySelector('.products-container')
        products_container.append(clone_template)
    })
}
console.log('hola');    
loadProd()

