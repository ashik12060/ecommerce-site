// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import axiosInstance from "../pages/axiosInstance";

// const OrderSingle = () => {
//   const [orderItems, setOrderItems] = useState([]);

//   useEffect(() => {
//     // Fetch order data from backend
//     const fetchOrderItems = async () => {
//       try {
//         const response = await axiosInstance.get(
//           `${process.env.REACT_APP_API_URL}/api/orders`
//         ); // Replace "/api/orders" with your actual backend endpoint
//         setOrderItems(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching order items:", error);
//       }
//     };

//     fetchOrderItems();
//   }, []);

//   return (
//     <div>
//       <h2>Order Items</h2>
//       <ul>
//         {orderItems.map((order) => (
//           <li key={order._id}>
//             <h3>Order ID: {order._id}</h3>
//             <ul>
//               {order.orderItems.map((item, index) => (
//                 <li key={index}>
//                   <p>Product ID: {item.productId}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Price: ${item.price}</p>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderSingle;


// import React, { useEffect, useState } from "react";
// import axiosInstance from "../pages/axiosInstance";
// import "./OrderSingle.css"; // Import CSS file for styling

// const OrderSingle = () => {
//   const [orderItems, setOrderItems] = useState([]);

//   useEffect(() => {
//     const fetchOrderItems = async () => {
//       try {
//         const response = await axiosInstance.get(
//           `${process.env.REACT_APP_API_URL}/api/orders`
//         );
//         setOrderItems(response.data.orders);
//       } catch (error) {
//         console.error("Error fetching order items:", error);
//       }
//     };

//     fetchOrderItems();
//   }, []);

//   return (
//     <div className="order-list">
//       <h2>Order Items</h2>
//       <ul className="order-items">
//         {orderItems.map((order) => (
//           <li key={order._id} className="order-item">
//             <h3>Order ID: {order._id}</h3>
//             <ul className="product-list">
//               {order.orderItems.map((item, index) => (
//                 <li key={index} className="product-item">
//                   <p>Product ID: {item.productId}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Price: ${item.price}</p>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderSingle;


import React, { useEffect, useState } from "react";
import axiosInstance from "../pages/axiosInstance";
import "./OrderSingle.css"; // Import CSS file for styling

const OrderSingle = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/api/orders`
        );
        setOrderItems(response.data.orders);
      } catch (error) {
        console.error("Error fetching order items:", error);
      }
    };

    fetchOrderItems();
  }, []);

  return (
    <div>
      <h2>Order Items</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((order) => (
            <React.Fragment key={order._id}>
              <tr>
                <td className="border border-1 px-3 text-center" rowSpan={order.orderItems.length}>{order._id}</td>
                <td className="border border-1 px-3 text-center">{order.orderItems[0].productId}</td>
                <td className="border border-1 px-3 text-center">{order.orderItems[0].quantity}</td>
                <td className="border border-1 px-3 text-center">${order.orderItems[0].price}</td>
              </tr>
              {order.orderItems.slice(1).map((item, index) => (
                <tr key={index} className="border border-1">
                  <td className="border border-1 px-3 text-center">{item.productId}</td>
                  <td className="border border-1 px-3 text-center">{item.quantity}</td>
                  <td className="border border-1 px-3 text-center">${item.price}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderSingle;

