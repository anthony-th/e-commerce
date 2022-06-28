import React from "react";
import { GameItem } from "../../components/game-item/game-item";
import "./home-page.css";

const GAMES = [
  {
    image: "/game-images/gtav.jpg",
    title: "GTA V",
    genres: ["action", "adventure"],
    price: 5000,
    video: "https://www.youtube.com/embed/hvoD7ehZPcM",
    id: 1,
    description: `Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.`,
  },
  {
    image: "/game-images/assasin.jpg",
    title: `Assassin's creed valhalla`,
    genres: ["action", "RPG"],
    price: 3600,
    video: "https://www.youtube.com/embed/VYiPNuuBQs0",
    id: 2,
    description: `Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power. `,
  },
  {
    image: "/game-images/lol.jpg",
    title: `League of legends`,
    genres: ["moba"],
    price: 0,
    video: "https://www.youtube.com/embed/UOxkGD8qRB4",
    id: 3,
    description: `Welcome to League of Legends Join the League Outplay, Outthink Whether you're playing Solo or Co-op with friends, League of Legends is a highly competitive, fast paced action-strategy game designed for those who crave a hard fought victory. WHAT IS LEAGUE OF LEGENDS? Tanks Fighters Mages Assassins Marksmen Supports FIGHTERS LOVE TO DUEL`,
  },
  {
    image: "/game-images/genshin.jpg",
    title: `Genshin Impact`,
    genres: ["action", "RPG"],
    price: 0,
    video: "https://www.youtube.com/embed/MDpYYzMvnHI",
    id: 4,
    description: `Genshin Impact is an open-world action RPG. In the game, set forth on a journey across a fantasy world called Teyvat. In this vast world, you can explore seven nations, meet a diverse cast of characters with unique personalities and abilities, and fight powerful enemies together with them, all on the way during your quest to find your lost sibling.`,
  },
  {
    image: "/game-images/hades.jpg",
    title: `Hades`,
    genres: ["action", "RPG"],
    price: 2000,
    video: "https://www.youtube.com/embed/4rAXUsrQIaI",
    id: 5,
    description: `Players control Zagreus, the son of Hades, as he attempts to escape from the Underworld to reach Mount Olympus, at times aided by gifts bestowed on him from the other Olympians. Each run challenges the player through a random series of rooms populated with enemies and rewards. The game has a hack and slash combat system; the player uses a combination of their main weapon attack, a special attack, a dash ability, and a magic ability to defeat them while avoiding damage to progress as far as possible. While Zagreus will often die, the player can use gained treasure to improve certain attributes or unlock new weapons and abilities to improve chances of escaping on subsequent runs.`,
  },
  {
    image: "/game-images/bdo.jpg",
    title: `Black Desert Online`,
    genres: ["action", "RPG"],
    price: 0,
    video: "https://www.youtube.com/embed/DD4zMOvRrzM",
    id: 6,
    description: `Black Desert Online is a sandbox-oriented fantasy massively multiplayer online role-playing game developed by Korean video game developer Pearl Abyss and originally published for Microsoft Windows in 2015. A mobile version titled Black Desert Mobile was initially released in Asia by early 2019, and worldwide in December 2019`,
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
