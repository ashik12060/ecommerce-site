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
      
    <h3 className="my-5"><span className="py-2 px-4 rounded bg-primary text-white ">Total Orders: {orderItems.length}</span></h3>
    <h2>Reports</h2>
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

