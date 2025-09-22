import React from "react";
import SelectedplayersCart from "../selactedplayersCart/SelectedplayersCart";

const SelectedPlayers = ({ puschagePlayer, removePlayer, SetToggle }) => {
  //   console.log(puschagePlayer);
  const handleAddMorePlayerbtn = () => {
    SetToggle(true);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      {puschagePlayer.map((purchage, index) => (
        <SelectedplayersCart
          removePlayer={removePlayer}
          key={index}
          purchage={purchage}
        ></SelectedplayersCart>
      ))}
      <button onClick={handleAddMorePlayerbtn} className="btn hover:bg-amber-300">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;
