import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows=2, ncols=2, chanceLightStartsOn=0.25 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for ( let i=0; i<nrows; i++){
      let rows = [];
      for ( let j=0; j<ncols; j++){
        rows.push(Math.random() < chanceLightStartsOn)
      }
      initialBoard.push(rows);
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    //return board.every(row => row.every(cell => !cell));
    return board.every( row => row.every(element => element === false));
  }

  function flipCellsAround(coord) {
    setBoard(board => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let boardCopy = []
      for( let i=0; i<nrows; i++){
        let rows = []
        for(let j=0; j<ncols; j++){
          rows.push(board[i][j]);
        }
        boardCopy.push(rows);
      }

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y,x, boardCopy);
      
      //Flip cells around it
      flipCell(y-1, x, boardCopy);
      flipCell(y+1, x, boardCopy);
      flipCell(x-1, y, boardCopy);
      flipCell(x+1, y, boardCopy);
      
      // TODO: return the copy
      return boardCopy;

    });
  }

  // if the game is won, just show a winning msg & render nothing else
  // TODO
  if ( hasWon()){
    return <div>You Won!</div>;
  }

  // make table board
  let tblBoard = [];
  for( let i=0; i<nrows; i++){
    let rows = []
    for( let j=0; j<ncols; j++){
      let coord = `${y}-${x}`;
      rows.push(
        <Cell 
          key={coord}
          isLit={board[i][j]} 
          flipCellsAroundMe={() => flipCellsAround(coord)}  
        />)
    }
    tblBoard.push(<tr key={y}>{rows}</tr>)
  }

  return (
    <div>
      <table>
        <tbody>{tblBoard}</tbody>
      </table>
    </div>
   
  )
}

export default Board;
