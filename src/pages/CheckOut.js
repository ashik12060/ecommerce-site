import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faLocationDot,
  faMoneyBills,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Shared/Header/Header";

const CheckOut = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve totalPrices from query parameter and parse it as a number
  const totalPrices = parseFloat(queryParams.get("totalPrice")) || 0;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price including delivery fee only if totalPrices is not 0
    if (totalPrices !== 0) {
      const deliveryFee = 15; // Assuming a static delivery fee of $15
      const totalPriceWithDelivery = totalPrices + deliveryFee;
      setTotalPrice(totalPriceWithDelivery);
    }
  }, [totalPrices]);
  
  return (
    <div>
      <div>
      <h2>Checkout</h2>
      <p>Total Price (Excluding Delivery Fee): ${totalPrice}</p>
      <p>Delivery Fee: $15</p>
      <p>Total Price (Including Delivery Fee): ${totalPrices}</p>
    </div>
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
            ${totalPrices}
            </span>
          </h6>
          <h6>
            <strong className="pe-1">Delivery Fee: </strong>
            <span className="ps-4">$15.00</span>
          </h6>
          <h6>
            <strong>Total Price</strong>{" "}
            <span className="ps-5">${totalPrice}</span>
          </h6>
          <Link to="/bkash-payment">
            <button className="px-5 py-2 rounded bg-color border-0 text-white fw-bold">
              Place Order
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
