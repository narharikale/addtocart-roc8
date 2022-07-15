import { CartProductCard } from "../components/CartProductCard";
import { useData } from "../context/DataProvider";
import '../App.css';
import { PricedetailCard } from "../components/PricedetailCard";

function Cart () {

    const { cart , saveLater } = useData();

    return (
        <div className="main-container">
            <div className="cart-card-container">
                <h2>Item in cart</h2>
                { cart.map(( product ) => {
                    return <CartProductCard key={ product.id } product={ product } inCart="inCart"/>
                })
                }
                <h2>Saved for later</h2>
                { saveLater.map((product)=> {
                    return <CartProductCard key={ product.id } product={ product } inSaveLater="inSaveLater"/>
                })
                }
            </div>
            <div> Checkout
                <PricedetailCard/>
            </div>
        </div>
    )
}

export { Cart }