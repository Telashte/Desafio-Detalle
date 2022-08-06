import { useState, useEffect } from 'react'
import { getProductById } from "../../asynmock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()  

    const { productId } = useParams()


    useEffect(() => {
      getProductById(productId).then(response => {
        setProduct(response)
      })
    }, [])

    return(
      <>
        <h1>Detalle</h1>
        <h2>{product?.name}</h2>
        <p>Fantastico consola de videojuegos con juegos, servicios, experiensias increibles</p>
      </>

    )
}

export default ItemDetailContainer