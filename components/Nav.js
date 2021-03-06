import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext); //destructuring

  //Cart quantity
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="text-xl pt-1 font-bold">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Cyber
            </span>
            store
          </a>
        </Link>
        <a
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
          className="text-lg font-bold cursor-pointer"
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Nav;
