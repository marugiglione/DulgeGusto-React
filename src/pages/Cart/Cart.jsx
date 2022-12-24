import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const Cart = () => {

  const { cartList, deleteCart, removeItemCart, totalPrice, totalQuantity } = useCartContext()
  const [dataForm, setDataForm] = useState({name: "", email: "", phone: "",})


  const handleSubmit = (e) => {
    e.preventDefault()
    let order = {}
    order.buyer = { dataForm }
    order.total = totalPrice()
    order.items = cartList.map( product => { 
      return { 
        id: product.id, 
        name: product.name, 
        price: product.price,
      }
    })
    console.log(order)

    const db = getFirestore()
    const queryCollection = collection(db, "orders")
    addDoc(queryCollection, order)
      .then((order) => {
        const orderId = `Compra confirmada. Código: ${order.id}`
        alert(orderId)
      })
      .finally(() => {
        setDataForm({name: "", email: "", phone: "",})
        deleteCart()
      })
  }
  const handleOnChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value,})
  }

  return (
    <div>
      <h1>Carrito</h1>
      {totalQuantity() !== 0 ? 
        (
          <>
            <ul>
              {cartList.map((product) =>  <li key={product.id}>
                                            <img src={product.foto} className="w-25" alt="Imagen del producto" />
                                            Nombre: {product.name}  -  
                                            Precio unitario: ${product.price}  -  
                                            Cantidad: {product.cantidad}  -  
                                            Precio subtotal: ${product.price * product.cantidad}
                                            <button onClick={ ()=> removeItemCart(product.id)}>Eliminar Producto</button> 
                                          </li>
              )}
            </ul>
            
            <div>Precio Total Acumulado: ${totalPrice()}</div>
            
            <button onClick={deleteCart}>Eliminar todos los Productos</button>
            <button> <Link to='/'> Agregar mas Productos</Link></button>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                    value={dataForm.name}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    name="email"
                    onChange={handleOnChange}
                    value={dataForm.email}
                    placeholder="example@email"
                />
                <input
                    type="text"
                    name="reemail"
                    onChange={handleOnChange}
                    placeholder="Reingrese su mail"
                />
                <input
                    type="text"
                    name="phone"
                    onChange={handleOnChange}
                    value={dataForm.phone}
                    placeholder="Número de teléfono"
                />
              <button className="btn btn-outline-success">Confirmar compra</button>
            </form>
            
          </>
        ) : (
          <div>
            <p>El carrito esta vacio - <Link to='/'> Agregar Productos</Link></p>
          </div>
        )
      
      }
      </div>
  )

}

export default Cart
  