import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { BuyButton } from "../buy-button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const dispath = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isitemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isitemInCart) {
      dispath(deleteItemFromCart(game.id));
    } else {
      dispath(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} rub.</span>
      <BuyButton
        type={isitemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isitemInCart ? "Убрать из корзины" : "В корзину"}
      </BuyButton>
    </div>
  );
};
