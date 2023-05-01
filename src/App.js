import "./App.css";
import { useState, useRef, useEffect } from "react";

const App = () => {
  const [play, setPlay] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState("R");

  const Tic = (props) => {
    return (
      <button className={play[props.id]} onClick={() => ticClick(props.id)}>
        {play[props.id]}
      </button>
    );
  };

  let ticClick = (id) => {
    if (play[id] != 0) return;
    let tempPlay = [...play];
    tempPlay[Number(id)] = player;
    setPlay(tempPlay);
    if (player === "R") {
      setPlayer("B");
    } else {
      setPlayer("R");
    }
  };

  return (
    <div className="App ">
      <center>
        <h1>TicTacToe</h1>
        <h3>Player: {player}</h3>
      </center>

      <div className="tictac">
        <Tic id="0" />
        <Tic id="1" />
        <Tic id="2" />
        <Tic id="3" />
        <Tic id="4" />
        <Tic id="5" />
        <Tic id="6" />
        <Tic id="7" />
        <Tic id="8" />
      </div>
    </div>
  );
};

export default App;
