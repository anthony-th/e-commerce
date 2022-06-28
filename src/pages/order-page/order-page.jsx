import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import { calcTotalPrice } from "../../components/utils";
import './order-page.css';

export const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const counter = Math.abs(items.length) % 100; 
  var counterNext = counter % 10;
  if (counterNext === 1) { 
    return (
      <div className="order-page">
        <div className="order-page__left">
          { items.map(order => <OrderItem game={order}/>)}
        </div>
        <div className="order-page__right">
          <div className="order-page__total-price">
            <span>
              Purchase <span className="order-page__price-select">{items.length}</span> item for <span className="order-page__price-select">$ { calcTotalPrice(items) }.</span>
            </span>
          </div>
        </div>
      </div>
    ); 
  }
  if(items.length <1) {
    return <h2>Your cart is empty</h2>
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        { items.map(order => <OrderItem game={order}/>)}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            Purchase <span className="order-page__price-select">{items.length}</span> items for <span className="order-page__price-select">$ { calcTotalPrice(items) }.</span>
          </span>
        </div>
      </div>
    </div>
  );
};
