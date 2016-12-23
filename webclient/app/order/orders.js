import React from "react"
import Order from "./order"

const Orders = ({orders}) => {
  let allOrders = orders
    .map(order => (<Order order={order} />));

  return (
    <div>
      <h1>Orders</h1>
      <ul>{allOrders}</ul>
    </div>);
};

export default Orders;

