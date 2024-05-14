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

const CheckOut = () => {
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const history = useNavigate();

  
 

  const search = useParams();
  console.log(search.totalPrice);
  console.log(search.id);


      const deliveryFee = 15; 
      const price = Number(search.totalPrice) +deliveryFee;

      console.log(price);

// sending data to mongodb
const handlePlaceOrder = () => {
  const data = {
    productId: search.id, 
    totalPrice: price 
  };
 

  axios.post(`${process.env.REACT_APP_API_URL}/api/product-info/add`, data)
    .then(response => {
      console.log("Order placed successfully:", response.data);
      toast.success("Payment Completed");
    })
    .catch(error => {
      console.error("Error placing order:", error);
    });
};
  
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div className="pt-5 card2-bg px-5 w-75">
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
            <span className="ps-3">
            ${search.totalPrice}
            </span>
          </h6>
          <h6>
            <strong className="pe-1">Delivery Fee: </strong>
            <span className="ps-4">$15.00</span>
          </h6>
          <h6>
            <strong>Total Price</strong>{" "}
            <span className="ps-5">${price}</span>
          </h6>
          <Link to="/bkash-payment">
            <button onClick={handlePlaceOrder}  className="px-5 py-2 rounded bg-color border-0 text-white fw-bold">
              Place Order
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
