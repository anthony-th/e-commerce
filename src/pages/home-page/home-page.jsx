import React from "react";
import { GameItem } from "../../components/game-item/game-item";
import "./home-page.css";
import { GAMES } from "../../data/games";

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
