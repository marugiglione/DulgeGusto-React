import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = (obj) => {  
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    useEffect(()=> {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'items')
        
        let queryFilter = categoriaId ?
                query(queryCollection, where('categoria', '==', categoriaId))
            :
                queryCollection

            getDocs(queryFilter)
            .then((resp) => setProducts( resp.docs.map(doc => ({id: doc.id, ...doc.data()}))))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))

      
    }, [categoriaId])

    return (
        loading 
            ? 
                <h2>Cargando...</h2>            
            :
                <div>
                    <h1>DULCE GUSTO</h1> 
                    <h3>PRODUCTOS</h3> 
                    
                    <ItemList products={products} />
                </div>
    )
}


export default ItemListContainer