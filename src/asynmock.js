import nintendo from "./nintendo.jpg";
import play from "./play.jpg";
import xbox from "./xbox.jpg";

const products = [
    { 
        id: '1', 
        name: 'Nintendo',
        price: 320, 
        category: 'consola', 
        img: <img src={nintendo} className="Nintendo" alt="nintendo" />,
        stock: 25, 
        description:'Descripcion de Nintendo Switch'
    },
    { id: '2', name: 'PlayStation', price: 400, category: 'Sony', img: <img src={play} className="PlayStation" alt="PlayStation" />, stock: 16, description:'Descripcion de PlayStation 5'},
    { id: '3', name: 'XBOX', price: 500, category: 'Microsoft',  img: <img src={xbox} className="XBOX" alt="XBOX" />, stock: 9, description:'Descripcion de XBOX Series X'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
