import React from "react";
import logo from "../../assets/logo.png"
import coinPng from "../../assets/dollar1.png"

const Navber = ({availableBalance}) => {
 




  return (
    <div className="navbar max-w-[1200px] mx-auto ">
      <div className="flex-1">
        <a className="text-xl">
          <img src={logo} alt="Cricket" />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-bold text-xl">{availableBalance}</span>
        <span className="font-bold text-xl">Coin</span>
        <img  src={coinPng} alt="dolar Png icon" />
      </div>
    </div>
  );
};

export default Navber;
