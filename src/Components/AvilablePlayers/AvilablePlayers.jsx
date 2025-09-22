import React, { use } from "react";
import PlayerCart from "../playerCart/PlayerCart";

const AvilablePlayers = ({
  playersPromise,
  seAvailableBalance,
  availableBalance,
  puschagePlayer,
  setPUrchagePlayer,
}) => {
  const playerData = use(playersPromise);
  // console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid gap-7 grid-cols-1 md:grid-cols-3 ">
        {playerData.map((player, index) => (
          <PlayerCart
            puschagePlayer={puschagePlayer}
            setPUrchagePlayer={setPUrchagePlayer}
            key={index}
            seAvailableBalance={seAvailableBalance}
            availableBalance={availableBalance}
            player={player}
          ></PlayerCart>
        ))}
      </div>
    </div>
  );
};

export default AvilablePlayers;
