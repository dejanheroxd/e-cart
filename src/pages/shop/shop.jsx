import { PRODUCTS } from "../../products";
import { Product } from "./product";

export function Shop() {
  return (
    <div>
      <div>
        <h1 className="mt-14 text-center text-5xl font-bold">PedroTech Shop</h1>
      </div>
      <div>
        <div className="m-8 grid grid-cols-3 gap-20">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
