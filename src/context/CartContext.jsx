import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const cartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    const repeatedProduct = (id) => cartList.findIndex ( (product) => product.id === id)
    const addToCart = (newProductCart) => {
        let index = repeatedProduct (newProductCart.id)

        if (index === -1) {
            setCartList( [...cartList, newProductCart ])
        } else {
            cartList[index].cantidad += newProductCart.cantidad
            setCartList ( [...cartList] )
        }
    } 

    const deleteCart = () => {
        setCartList([])
    }

    const removeItemCart = (productId) => {
        setCartList(cartList.filter((product) => product.id !== productId))
    }
    
    const totalQuantity = () => {
        return cartList.reduce((count, product) => (count += product.cantidad), 0)
    }
    
    const totalPrice = () => {
        return cartList.reduce((sumPrice, product) => (sumPrice += product.cantidad * product.price),0)
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            deleteCart,
            removeItemCart,
            totalQuantity,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default cartContextProvider