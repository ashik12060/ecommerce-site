

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
// import {
//   faAward,
//   faLocationDot,
//   faMoneyBills,
//   faTruck,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const CheckOut = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const totalPrices = parseFloat(queryParams.get("totalPrices")); // Parse totalPrices as float

//   // Example: Maintain a state to store items and their quantities
//   const [items, setItems] = useState([
//     { name: "Item 1", price: 10, quantity: 1 },
//     { name: "Item 2", price: 20, quantity: 2 },
//     // Add more items here as needed
//   ]);

//   // Function to calculate the total price based on items and their quantities
//   const calculateTotalPrice = () => {
//     return items.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   // Calculate total price dynamically
//   const totalPrice = calculateTotalPrice();

//   return (
//     <div className="d-flex">
//       <div className="pt-5 card2-bg px-5 w-75">
//         <p className="font-color fw-bold">Delivery</p>
//         <hr />
//         <p>
//           <FontAwesomeIcon icon={faLocationDot} className="pe-2 " />
//           Kalabagan, Dhaka-1205
//         </p>
//         <p className="fw-bold">
//           <FontAwesomeIcon icon={faTruck} className="pe-2 " />
//           Free Delivery 20 june - 23 june
//         </p>
//         <p className="bg-white p-2 fw-bold">
//           Enjoy free shipping promotion with minimum 1 items.
//         </p>
//         <p>
//           <FontAwesomeIcon icon={faMoneyBills} className="pe-2 " />
//           Cash On Delivery
//         </p>
//         <hr />
//         <span className="font-color fw-bold">Service</span>
//         <p className="py-3">
//           <FontAwesomeIcon icon={faCalendarDays} className="pe-2 " />7 Days
//           Return
//         </p>
//         <p>Change of mind applicable</p>
//         <p className="pb-5  fw-bold">
//           <FontAwesomeIcon icon={faAward} className="pe-2 " />
//           Warranty Not Available
//         </p>
//       </div>
//       <div className="ps-5 pt-5">
//         <div className="pb-3">
//           <p className="fw-bold fs-5">Promo Code:</p>
//           <input className="border border-1 " type="text" placeholder="Enter Promo Code" />
//         </div>

//         <h5>Order Summary</h5>
//         <hr />
//         <h6>
//           <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
//         </h6>
//         <h6>
//           <strong>Delivery Fee: $15</strong>
//         </h6>
//         <h6>Total Price ={totalPrice} </h6>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faAward,
  faLocationDot,
  faMoneyBills,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckOut = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
//   const totalPrice = parseFloat(queryParams.get("totalPrice")); // Parse totalPrices as float

  // Example: Maintain a state to store items and their quantities
  const [items, setItems] = useState([
    { name: "Item 1", price: 10, quantity: 1 },
    { name: "Item 2", price: 20, quantity: 2 },
    // Add more items here as needed
  ]);

  // Function to calculate the total price based on items and their quantities
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total price dynamically
  const newPrice = calculateTotalPrice();
  const totalPrice = newPrice + 15; // Add delivery fee

  return (
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
          <input className="border border-1 " type="text" placeholder="Enter Promo Code" />
        </div>

        <h5>Order Summary</h5>
        <hr />
        <h6>
          <strong>Product Price:</strong> <span className="ps-3">${newPrice.toFixed(2)}</span>
        </h6>
        <h6>
          <strong className="pe-1">Delivery Fee: </strong><span  className="ps-4">$15.00</span>
        </h6>
        <h6><strong>Total Price</strong> <span className="ps-5">${totalPrice.toFixed(2)}</span></h6>
        <Link to='/bkash-payment'>
        <button className="px-5 py-2 rounded bg-color border-0 text-white fw-bold">Place Order</button></Link>
      </div>
    </div>
  );
};

export default CheckOut;
