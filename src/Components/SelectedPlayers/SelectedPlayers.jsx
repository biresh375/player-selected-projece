import React from "react";
import SelectedplayersCart from "../selactedplayersCart/SelectedplayersCart";

const SelectedPlayers = ({ puschagePlayer,removePlayer }) => {
//   console.log(puschagePlayer);
  return (
    <div className="max-w-[1200px] mx-auto">
      {puschagePlayer.map((purchage, index) => (
        <SelectedplayersCart removePlayer={removePlayer} key={index} purchage={purchage}></SelectedplayersCart>
      ))}
    </div>
  );
};

export default SelectedPlayers;
