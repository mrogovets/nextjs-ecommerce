import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0)
    return (
      <img
        className="img-responsive w-100"
        src="/empty_cart.jpg"
        alt="Empty cart"
      />
    );

  return (
    <div className="row mx-auto">
      <Head>
        <title>Cart Page</title>
      </Head>

      <div className="col-md-8 text-secondary table-responsive">
        <h2 className="text-uppercase">Shopping Cart</h2>
      </div>

      <div className="col-md-4"></div>
    </div>
  );
};

export default Cart;
