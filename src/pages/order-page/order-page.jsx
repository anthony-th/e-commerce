import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import { calcTotalPrice } from "../../components/utils";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="order-page">
      {items.length > 0 ? (
        <>
          <div className="order-page__left">
            {items.map((order, index) => (
              <OrderItem key={`order-${index}`} game={order} />
            ))}
          </div>
          <div className="order-page__right">
            <div className="order-page__total-price">
              <span className="order-page__total-price-block">
                Purchase{" "}
                <span className="order-page__price-select">{items.length}</span>{" "}
                item{items.length > 1 ? "s" : ""}{" "}for{" "}
                <span className="order-page__price-select">
                  ${" "}{calcTotalPrice(items)}.
                </span>
              </span>
            </div>
          </div>
        </>
      ) : (
        <h2 className="order-page__title-empty">Your cart is empty</h2>
      )}
    </div>
  );
};
