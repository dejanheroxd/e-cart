import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="flex max-w-md flex-col items-center justify-center">
      <img className="max-w-sm" src={productImage} />
      <div className="text-center">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="mt-2 rounded-3xl border-2 border-stone-900 px-3 py-1 hover:bg-stone-900 hover:text-white"
        >
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
}
