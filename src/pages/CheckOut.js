import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faLocationDot,
  faMoneyBills,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Shared/Header/Header";
import axiosInstance from "./axiosInstance";
import axios from "axios";
import { toast } from "react-toastify";
import { CartProvider, useCart } from "../hooks";

const CheckOut = () => {
  const { cart, clearCart } = useCart();

  const navigate = useNavigate();

  const search = useParams();
  console.log(search.totalPrice);
  console.log(search.id);

  const deliveryFee = 15;
  const price = Number(search.totalPrice) + deliveryFee;

  console.log(price);

  // sending data to mongodb
  const handlePlaceOrder = () => {
    axiosInstance
      .post(`${process.env.REACT_APP_API_URL}/api/order/place`, cart)
      .then((response) => {
        clearCart();
        console.log("Order placed successfully:", response.data);
        toast.success("Payment Completed");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };
  let totalSum = 0;
  cart.forEach((itm) => {
    totalSum += Number(itm.feature1) * itm.quantity;
  });
  return (
    <div>
      <CartProvider>
        <Header />
      </CartProvider>
      {/* <div>
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
              
            </div>
          </div>
        ))}
      </div> */}
      <div className="d-flex">
        <div className="pt-5 card2-bg px-5 w-75">
          <h3>CheckOut</h3>
          <div>
            {cart?.map((itm) => (
              <div
                className="border p-3 my-2 d-flex justify-content-between"
                key={itm._id}
              >
                <h6>
                  {itm.title} - {Number(itm.feature1)} x {itm.quantity}
                </h6>
                <div>
                  <span className="fw-bold">
                    Total: {Number(itm.feature1) * itm.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="font-color fw-bold">Delivery</p>
          <hr />
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="pe-2 " />
            Kalabagan, Dhaka-1205
          </p>
          <p className="fw-bold">
            <FontAwesomeIcon icon={faTruck} className="pe-2 " />
            Free Delivery 20 june - 23 june
          </p>
          <p className="bg-white p-2 fw-bold">
            Enjoy free shipping promotion with minimum 1 items.
          </p>
          <p>
            <FontAwesomeIcon icon={faMoneyBills} className="pe-2 " />
            Cash On Delivery
          </p>
          <hr />
          <span className="font-color fw-bold">Service</span>
          <p className="py-3">
            <FontAwesomeIcon icon={faCalendarDays} className="pe-2 " />7 Days
            Return
          </p>
          <p>Change of mind applicable</p>
          <p className="pb-5  fw-bold">
            <FontAwesomeIcon icon={faAward} className="pe-2 " />
            Warranty Not Available
          </p>
        </div>
        <div className="ps-5 pt-5">
          <div className="pb-3">
            <p className="fw-bold fs-5">Promo Code:</p>
            <input
              className="border border-1 "
              type="text"
              placeholder="Enter Promo Code"
            />
          </div>

          <h5>Order Summary</h5>
          <hr />
          <h6>
            <strong>Product Price:</strong>{" "}
            <span className="ps-3">BDT {totalSum}</span>
          </h6>
          <h6>
            <strong className="pe-1">Delivery Fee: </strong>
            <span className="ps-4">BDT 15.00</span>
          </h6>
          <h6>
            <strong>Total Price</strong>{" "}
            <span className="ps-5">BDT {totalSum + 15}</span>
          </h6>
          <>
            <button
              onClick={handlePlaceOrder}
              className="px-5 py-2 rounded bg-color border-0 text-white fw-bold"
            >
              Place Order
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
