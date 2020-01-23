/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
  getRandomNumber,
  getMineNumber,
  revealBoard,
  getUnrevealedData,
  getEmptyCells
} from "./Helpers";
import { connect } from "react-redux";
import { createBoard, statusChange, mineUpdater } from "../Store/actions";
import Cell from "./Cell";

function Board(props) {
  console.log("BOARD PROPS", props);
  const [count, setCount] = useState(0);

  //Destructing to pass as dependency
  const { height, width, mines, createBoard, boardData } = props;
  //Getting board ready with mines and mine number surrounding the cell
  useEffect(() => {
    let data = [];
    let randomX = 0;
    let randomY = 0;
    //Creating nested array - representing the board
    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        };
      }
    }
    //Adding mines randomly
    for (let i = 0; i < mines; i++) {
      randomX = getRandomNumber(width);
      randomY = getRandomNumber(height);
      if (!data[randomX][randomY].isMine) {
        data[randomX][randomY].isMine = true;
      } else {
        //Just to make sure mine count on board is exactly what supplied.
        i--;
      }
    }
    createBoard(data);
  }, [height, width, mines, createBoard]);

  useEffect(() => {
    //Getting Mine numbers for cell to display
    if (boardData !== null) {
      const data = getMineNumber(boardData, height, width);
      console.log("I want his", data);
      props.createBoard(data);
    }
  }, [boardData, height, width, createBoard]);

  //Handle left click for the cell
  function handleCellClick(x, y) {
    //Take out a copy of data
    let updatedData = props.boardData;
    // Preventing click on cell if cell is flagged
    if (updatedData[x][y].isFlagged) {
      return false;
    }

    //Check if Mine and gameOver
    if (updatedData[x][y].isMine) {
      updatedData = revealBoard(updatedData);
      props.createBoard(updatedData);
      props.statusChange("Game Over");
    }
    //Continue game with additional options
    updatedData[x][y].isFlagged = false;
    updatedData[x][y].isRevealed = true;

    // Get all the empty cell  - should not be revealed, should not be mine and should be empty
    if (updatedData[x][y].isEmpty) {
      updatedData = getEmptyCells(x, y, updatedData, props.height, props.width);
    }

    if (getUnrevealedData(updatedData).length === props.mineCount) {
      revealBoard(updatedData);
      props.statusChange("You win");
      props.createBoard(updatedData);
    }
    //This is to re-render an application.
    setCount(count + 1);
  }

  //Handle Right Click
  function onContextMenu(e, x, y) {
    //Preventing default behaviour otherwise regular menu opens!
    e.preventDefault();
    let updatedData = props.boardData;
    if (updatedData[x][y].isRevealed) {
      return true;
    }

    if (!updatedData[x][y].isRevealed && !updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = true;
      props.mineUpdater(props.mineCount - 1);
    } else if (!updatedData[x][y].isRevealed && updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      props.mineUpdater(props.mineCount + 1);
    } else {
      updatedData[x][y].isFlagged = false;
      props.mineUpdater(props.mineCount + 1);
    }
    //Check if all mines are flagged
    if (props.mineCount <= 1) {
      let mineCells = [];
      let flagCells = [];
      //Getting the mine cells
      updatedData.map(datarow => {
        return datarow.map(dataitem => {
          if (dataitem.isMine) {
            mineCells.push(dataitem);
          }
        });
      });

      //Getting the flaged cells to compare
      updatedData.map(datarow => {
        return datarow.map(dataitem => {
          if (dataitem.isFlagged) {
            flagCells.push(dataitem);
          }
        });
      });

      //Compare two arrays
      if (JSON.stringify(mineCells) === JSON.stringify(flagCells)) {
        props.statusChange("You win");
        updatedData = revealBoard(updatedData);
        props.createBoard(updatedData);
      }
    }
  }

  //Drawing the board
  function drawBoard(data) {
    if (data !== null) {
      return data.map(datarow => {
        return datarow.map(dataitem => {
          return (
            <div key={dataitem.x * datarow.length + dataitem.y}>
              <Cell
                onClick={() => handleCellClick(dataitem.x, dataitem.y)}
                onContextMenu={e => onContextMenu(e, dataitem.x, dataitem.y)}
                value={dataitem}
              />
              {datarow[datarow.length - 1] === dataitem ? <div className="clear" /> : ""}
            </div>
          );
        });
      });
    }
  }

  return <div className="board">{drawBoard(boardData)}</div>;
}

const mapStateToProps = state => {
  return {
    boardData: state.boardReducers.boardData,
    gameStatus: state.boardReducers.gameStatus,
    mineCount: state.boardReducers.mineCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBoard: details => dispatch(createBoard(details)),
    statusChange: details => dispatch(statusChange(details)),
    mineUpdater: details => dispatch(mineUpdater(details))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);
