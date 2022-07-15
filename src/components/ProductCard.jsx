import { useData } from '../context/DataProvider';
import './productCard.css';
import { Link } from 'react-router-dom'



function ProductCard( { product }){

    const { price , name , imgURL }= product ;
    const { cart , setCart } = useData();

    function addToCartHandler(product){

        setCart([ ...cart , { ...product , qty:1}])
    }

    return (
        <div className="product-card">
            <img className="product-card-img" src={imgURL} alt="product" />
            <div className="product-card-body" >
                <h4> { name }</h4>
                <h4> Price : { price }</h4>
                { 
                    cart.some((item) => product.id === item.id) ? <Link to='/cart' >Already in cart</Link>  :
                    <button onClick={ () => addToCartHandler(product) }> Add to cart </button>  
                }
                
            </div>
        </div>
    )
}

export { ProductCard }