import React from "react"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import {orders} from "./order/reducers"
import OrderComponent from "./order/components/order-component"
import ReactDOM from "react-dom"

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
    <OrderComponent />
  </Provider>,
  document.getElementById("the-app"));
