import React from "react";
import { useCart } from "../hooks";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const {
    cart,
    addCartItem,
    incrementItem,
    decrementItem,
    removeItemFromCart,
  } = useCart();
  //   console.log({ cart });
  let totalSum = 0;
  cart.forEach((itm) => {
    totalSum += Number(itm.feature1) * itm.quantity;
  });
  return (
    <div className="p-5">
      {cart?.map((itm) => (
        <div
          className="border p-3 my-2 d-flex justify-content-between"
          key={itm._id}
        >
          <h6>
            {itm.title} - {Number(itm.feature1)}
          </h6>
          <div>
            <span>Total: {Number(itm.feature1) * itm.quantity}</span>
            <button
              className="mx-2 px-3"
              onClick={() => decrementItem(itm._id)}
            >
              -
            </button>
            <span className="mx-2 px-3">{itm.quantity}</span>
            <button
              className="mx-2 px-3"
              onClick={() => incrementItem(itm._id)}
            >
              +
            </button>
            <button
              className="mx-2 px-3"
              onClick={() => removeItemFromCart(itm._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <h4 className="text-end m-3">Subtotal : {totalSum} BDT</h4>
      <Link to={"/checkout"}>
        <button>Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default CartComponent;
