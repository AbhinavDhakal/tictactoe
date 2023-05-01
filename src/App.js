import "./App.css";
import { useState, useRef, useEffect } from "react";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const App = () => {
  const [play, setPlay] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState("R");
  const [checkWin, setCheckWin] = useState(null);

  function displayWinner() {
    if (checkWin !== "draw") {
      return `${checkWin} won!`;
    } else {
      return "It's a draw!";
    }
  }

  const Tic = (props) => {
    return (
      <>
        <button className={play[props.id]} onClick={() => ticClick(props.id)}>
          {play[props.id]}
        </button>
      </>
    );
  };

  let ticClick = (id) => {
    if (play[id] !== 0) return;
    if (checkWin) return;

    let tempPlay = [...play];
    tempPlay[Number(id)] = player;
    setPlay(tempPlay);
    if (player === "R") {
      setPlayer("B");
    } else {
      setPlayer("R");
    }
  };

  useEffect(() => {
    let winnings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
    ];

    winnings.forEach((win) => {
      if (
        play[win[0]] === play[win[1]] &&
        play[win[1]] === play[win[2]] &&
        play[win[1]] !== 0
      ) {
        setCheckWin(play[win[0]]);
      }
    });

    console.log(play);
    if (play.findIndex((c) => c === 0) === -1) {
      setCheckWin("draw");
    }
  }, [play]);

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
      <p>{checkWin && displayWinner()}</p>
    </div>
  );
};

export default App;
