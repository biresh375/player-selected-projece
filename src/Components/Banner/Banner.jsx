import React from "react";
import banner from "../../assets/banner-main.png";
import bannerbg from "../../assets/bg-shadow.png"
// import { Button } from "@/components/ui/button";



 
const Banner = ({availableBalance,seAvailableBalance}) => {


 const handleCoins=(availableBalance)=>{
    seAvailableBalance(availableBalance+10000)
    
  }


  return (
    <div className="relative max-w-[1200px] mx-auto my-8 py-16 flex items-center justify-center text-center rounded-2xl overflow-hidden border bg-gradient-to-tr from bg-[#131313]" 
     style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay for gradient effect */}
      
      <div />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4">
        <img src={banner} alt="Cricket Logo" className="w-40 h-auto my-5" />
        <h1 className="text-2xl md:text-4xl font-bold text-white ">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="p-1 border-1 border-gray-400 rounded-xl mb-8 cursor-pointer">
            <button onClick={()=>handleCoins(availableBalance)} className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:bg-gradient-to-l hover:text-gray-600 font-semibold rounded-xl px-6 py-2 shadow-lg cursor-pointer ">
          Claim Free Credit
        </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
