import React from "react"

const Order = ({order}) => (
  <li className="order">
    <span className="quantity">{order.quantity}</span> {order.name}
  </li>);

export default Order;
