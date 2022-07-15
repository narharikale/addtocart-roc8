import { useData } from "../context/DataProvider";
import "./CartProdcutCard.css";

function CartProductCard({ product, inCart }) {
  const { price, name, imgURL } = product;
  const { cart, setCart, saveLater, setSaveLater } = useData();

  function saveLaterHandler(id) {
    setCart(cart.filter((item) => item.id !== id));
    setSaveLater([...saveLater, cart.find((item) => item.id === id)]);
  }

  function increaseQty(product) {
    if (product.qty >= 1) {
      const increasedQtyArr = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(increasedQtyArr);
    }
  }

  function decreaseQty() {
    if (product.qty > 1) {
      const decreaseQtyArr = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
      setCart(decreaseQtyArr);
    }
  }

  function addToCartHandler(product){
    setSaveLater((saveLater) => saveLater.filter((item) => item.id !== product.id));
    setCart([ ...cart , { ...product , qty:1}])
}

  return (
    <div className="cart-product-card">
      <img className="cart-product-card-img" src={imgURL} alt="cart-img" />
      <div className="cart-product-card-body">
        <h4> {name}</h4>
        <h4> Price : {price}</h4>
        {inCart === "inCart" ? (
          <div className="qty-body">
            <button
              disabled={product.qty === 1}
              className={product.qty === 1 ? "not-allowed" : ""}
              onClick={() => decreaseQty(product)}
            >
              -
            </button>
            {product.qty}
            <button onClick={() => increaseQty(product)}>+</button>
            <button onClick={() => saveLaterHandler(product.id)}>
              Save Later
            </button>
          </div>
        ) : (
          <button onClick={() => addToCartHandler(product)}>add to cart</button>
        )}
      </div>
    </div>
  );
}

export { CartProductCard };
