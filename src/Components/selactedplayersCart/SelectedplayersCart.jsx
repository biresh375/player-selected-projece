import React from "react";
import vectorImage from "../../assets/Vector.png"

const SelectedplayersCart = ({ purchage,removePlayer }) => {
    const handleDelete=()=>{
        removePlayer(purchage)
    }
//   console.log(purchage);
  return (
    <div className="border-1 mb-4 border-gray-200 p-5 rounded-lg flex justify-between items-center">
      <div className="flex gap-4">
        <img
          className="h-[60px] w-[60px] object-cover rounded-xl"
          src={purchage.player_image}
          alt="players mage"
        />
        <div>
          <h1 className="font-bold text-xl">{purchage.player_name}</h1>
          <p>{purchage.bating_style}/{purchage.boling_style}</p>
        </div>
      </div>
      <div onClick={handleDelete}>
        <img src={vectorImage} alt="" />
      </div>
    </div>
  );
};

export default SelectedplayersCart;
