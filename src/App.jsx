import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";

import AvilablePlayers from "./Components/AvilablePlayers/AvilablePlayers";
import Navber from "./Components/Navber/Navber";
import Loading from "./Components/loading/Loading";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/footerSection/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [puschagePlayer, setPUrchagePlayer] = useState([]);
  const [availableBalance, seAvailableBalance] = useState(600000000);
  const [toggle, SetToggle] = useState(true);
  const removePlayer = (ply) => {
    // console.log(ply);
    const updatepuschagePlayer = puschagePlayer.filter(
      (puschage) => puschage.player_name !== ply.player_name
    );
    setPUrchagePlayer(updatepuschagePlayer);
    seAvailableBalance(availableBalance + ply.price);
  };

  // console.log(puschagePlayer);
  return (
    <>
      <Navber
        availableBalance={availableBalance}
        seAvailableBalance={seAvailableBalance}
      ></Navber>
      <Banner seAvailableBalance={seAvailableBalance}
      availableBalance={availableBalance}></Banner>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-5">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Player"
            : `Selected Player (${puschagePlayer.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => SetToggle(true)}
            className={`${
              toggle === true ? "bg-amber-300" : ""
            } font-semibold py-2 px-6 border border-gray-300 rounded-xl  sm:rounded-l-xl sm:rounded-r-none sm:border-r-0 cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => SetToggle(false)}
            className={`font-semibold py-2 px-6 border border-gray-300 rounded-xl md:rounded-r-xl sm:rounded-l-none md:border-l-0 cursor-pointer ${
              toggle === false ? "bg-amber-300" : ""
            }`}
          >
            Selected ({puschagePlayer.length})
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<Loading></Loading>}>
          <AvilablePlayers
            puschagePlayer={puschagePlayer}
            setPUrchagePlayer={setPUrchagePlayer}
            availableBalance={availableBalance}
            seAvailableBalance={seAvailableBalance}
            playersPromise={playersPromise}
          ></AvilablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          SetToggle={SetToggle}
          removePlayer={removePlayer}
          puschagePlayer={puschagePlayer}
        ></SelectedPlayers>
      )}

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
