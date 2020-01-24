import React from "react";
import Board from "./Components/Board";
import Score from "./Components/Score";
import { connect } from "react-redux";

function Game(props) {
  return (
    <div className="game">
      <Score mineCount={props.mineCount} gameStatus={props.gameStatus} />
      <Board
        height={props.gameData.height}
        width={props.gameData.width}
        mines={props.gameData.mines}
      />
      <button className="resetBtn">
        <a href="/">Reset</a>
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gameData: state.gameReducers,
    gameStatus: state.boardReducers.gameStatus,
    mineCount: state.boardReducers.mineCount
  };
};

export default connect(mapStateToProps)(Game);
