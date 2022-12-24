import { useState } from "react"
import { Link } from "react-router-dom"
import {  useCartContext } from "../../context/CartContext"

import Counter from "../Counter/Counter"


const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true)
  const {cartList, addToCart} = useCartContext()

  const onAdd = (cantidad) => {
    console.log(cantidad)
    addToCart( { ...product, cantidad } )
    setIsCounter(false)
  }
  console.log(cartList)

  return (
    <>
      <div className="row">
        <div className="col">
          <img src={product.foto} className="w-25" /> <hr />
          <p>{product.name}</p> <hr />
          <p>{product.desciption}</p> <hr />
          <p>Categoría: {product.categoria}</p> <hr /> 
          <p>Precio: ${product.price}</p>
        </div>
      
        <div className="col">
          { isCounter ? 
              <Counter 
                initial={1} 
                onAdd={onAdd} 
              />
            :  
              <div className="container mt-5">
                <Link to='/cart' className="btn btn-success">Terminar mi compra</Link>
                <Link to='/' className="btn btn-success">Seguir Comprando </Link>
              </div>
          }
        </div>
      </div>
    </>
  )
}
export default ItemDetail
  