import React from "react"
import {connect} from "react-redux"
import AddOrder from "./add-order"
import Orders from "./orders"

const orderPage = ({orders}) => {
  return (
    <div>
      <AddOrder />
      <Orders orders={orders} />
    </div>)
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders || []
  }
};

const OrderComponent = connect(mapStateToProps)(orderPage);
export default OrderComponent;
