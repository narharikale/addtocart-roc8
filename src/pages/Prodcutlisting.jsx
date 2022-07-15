import { ProductCard } from "../components/ProductCard"
import { useData } from "../context/DataProvider"
import "../App.css";
 

function Prodcutlisting () {

    const { products } = useData()

    return (
        <div className="main-container">
            { products && products.map(( product )=> {
                return <ProductCard key={product.id} product = { product }/>
            }) }
        </div>
    )
}

export { Prodcutlisting  }