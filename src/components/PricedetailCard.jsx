import { useData } from '../context/DataProvider'
import './pricedetailcard.css'

function PricedetailCard(){

    const { cart } = useData();
    
    
  
    const price = cart.reduce((total , curritem) => ({ totalPrice:total.totalPrice + curritem.price * curritem.qty }) , { totalPrice:0 })
    
    return (
        <div className="pricedetail-card">
            <h4>Price Detail</h4>
            <div className='pricedetail-card-body'>
                <p className='pricedetail-card-span'><span> No of item </span> <span> {cart.length}</span>  </p>
            </div>
            <div>
                <p className='pricedetail-card-span' ><span>Total Price </span> <span>{price.totalPrice}</span> </p>
            </div>
            <button> Proceed </button>
        </div>
    )   
}

export { PricedetailCard }