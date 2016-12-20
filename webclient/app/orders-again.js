import React from "react"
import {createStore, applyMiddleware} from "redux"
import {connect, Provider} from "react-redux"
import {addOrder} from "./actions"
import {orders} from "./reducers"
import ReactDOM from "react-dom"

const AddOrder = connect()(({dispatch}) => {
  let input;
  return (<form onSubmit={e => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addOrder(input.value.trim()));
    input.value = '';
  }}>
  <input ref={node => { input = node }} type="text" className="an-item" placeholder="Item" />
  <button type="submit" className="primary-btn">Add</button>
</form>);
})

const Orders = ({orders}) => {
  let allOrders = orders
    .map(order => (<Order order={order} />));

  return (
    <div>
      <h1>Orders</h1>
      <ul>{allOrders}</ul>
    </div>);
};

const Order = ({order}) => (
  <li className="order">
    <span className="quantity">{order.quantity}</span> {order.name}
  </li>);

const mapStateToProps = (state) => {
  return {
    orders: state.orders || []
  }
}

const OrderPage = connect(mapStateToProps)(({orders}) => {
  return (
    <div>
      <AddOrder />
      <Orders orders={orders} />
    </div>)});

let remoteAction = store => next => action => {
  if (action.meta && action.meta.remote) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const newOrder = new Request("/orders", {
      method: "POST",
      headers: headers,
      body: new Blob([JSON.stringify(action, null, 2)], {type : 'application/json'})
    });
    fetch(newOrder).then(response => {
      console.log(response);
      console.log(response.json());
      next(action)
    });
  } else {
    return next(action);
  }
}

let store = createStore(orders, applyMiddleware(remoteAction));

fetch("/orders")
  .then(resp => resp.json())
  .then(orders => {
    store.dispatch({type: "ALL_ORDERS", orders})
  })

ReactDOM.render(
  <Provider store={store}>
    <OrderPage />
  </Provider>,
  document.getElementById("the-app"));
