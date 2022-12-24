import { useState } from 'react'

const Counter = ({ initial=1, stock = 100, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial)
    
    const sumar = () => {
        setCantidad(cantidad + 1)
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addCantidad = () => {
        onAdd(cantidad)
    }
  return (
    <div className='border border-2 border-primary container w-50'>
        <button className='btn btn-outline-primary' onClick={restar}>-</button>
        <label>{cantidad}</label>
        <button className = "btn btn-outline-primary" onClick={sumar}>+</button><br/>
        <button className='btn btn-outline-primary' onClick={addCantidad}>Agregar al carrito</button>

    </div>
  )
}

export default Counter