// import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export function Navbar() {
  return (
    <div>
      <div className="flex h-16 items-center justify-end gap-3 bg-stone-900 pr-7  text-white">
        <Link className="text-lg font-semibold " to={"/"}>
          Shop
        </Link>
        <Link to={"/cart"}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}
