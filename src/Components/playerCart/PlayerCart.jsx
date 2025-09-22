import React, { useState } from "react";
import user from "../../assets/user1.png";
import report from "../../assets/report1.png";
import { toast } from "react-toastify";


const PlayerCart = ({
  player,
  seAvailableBalance,
  availableBalance,
  setPUrchagePlayer,
  puschagePlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);
// console.log(player);
  const handleSelected = (playerData) => {
    if (availableBalance < playerData.price) {
      toast("NOt Anough Coins");
      return;
    }
    if(puschagePlayer.length===6){
        toast("6 player alredy Selected")
        return
    }

    setIsSelected(true);
    seAvailableBalance(availableBalance - playerData.price);
    setPUrchagePlayer([...puschagePlayer, playerData]);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            className="rounded-xl h-[300px] w-full object-cover"
            src={player.player_image}
            alt="player image"
          />
        </figure>
        <div className=" mt-4">
          <div className="flex gap-2 items-center">
            <img src={user} alt="" />
            <h2 className="card-title font-bold">{player.player_name}</h2>
          </div>
          <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-4">
            <div className="flex gap-2 items-center">
              <img
                className="w-[20px] h-[20px]"
                src={report}
                alt="report flag"
              />
              <p>{player.player_country}</p>
            </div>
            <div>
              <span className="bg-gray-200 px-2 py-1 rounded-[10px]">
                {player.playing_role}
              </span>
            </div>
          </div>
          <div className="font-bold flex justify-between items-center mt-4">
            <span>Reting</span>
            <span>{player.player_rating}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">{player.bating_style}</span>
            <span>{player.boling_style}</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="font-bold ">
              price: $<span className="font-semibold">{player.price}</span>
            </p>
            <button
              disabled={isSelected}
              onClick={() => handleSelected(player)}
              className="btn"
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;
