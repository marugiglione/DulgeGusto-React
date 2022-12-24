import { memo } from "react"
import { Link } from "react-router-dom"

const Item = memo( ({ product }) => {
    console.log('Item')
  return (
    <div className='card w-50 mt-2'>
        <Link to={`/detail/${product.id}`}>
            <div className='card-header'>
                {product.name}
            </div>
            <div className='card-body'>
                <center>
                    <img src={product.foto} className="w-50" />
                </center>
            </div>
            <div className='card-footer'>
                categoria: {product.categoria}
                <hr />
                precio : {product.price}
            </div>
        </Link>
    </div> 
  )
}) 



export default Item