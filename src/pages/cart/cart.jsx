import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="mt-14 text-center text-5xl font-bold">
          Your Cart Items
        </h1>
      </div>
      <div className=" mt-10 flex flex-col items-center justify-center gap-5">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="my-7 grid w-96 grid-cols-2 grid-rows-2 items-center justify-center gap-y-2">
          <p> Subtotal: ${totalAmount}</p>
          <button
            onClick={() => navigate("/")}
            className="col-start-1 col-end-2 h-12 w-44 rounded-lg border-none bg-stone-900 text-white"
          >
            Continue Shopping
          </button>
          <button className="h-12 w-44 rounded-lg border-none bg-stone-900 py-2 text-white">
            Checkout
          </button>
        </div>
      ) : (
        <p>You have no items</p>
      )}
    </div>
  );
}
