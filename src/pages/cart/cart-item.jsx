import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    useContext(ShopContext);

  return (
    <div className="flex w-[650px] flex-row content-center items-center rounded-2xl border-none py-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <img className="max-w-[230px]" src={productImage} />
      <div className="flex h-24 flex-col">
        <p>
          <b className="text-2xl">{productName}</b>
        </p>
        <p className="mt-3 text-xl">${price}</p>
        <div className="pt-10">
          <button
            onClick={() => removeFromCart(id)}
            className="w-8 border bg-slate-200"
          >
            -
          </button>
          <input
            onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
            value={cartItems[id]}
            className=" w-20 border focus:outline-none"
          />
          <button
            onClick={() => addToCart(id)}
            className="w-8 border bg-slate-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
