import { useReducer } from "react";
import "./connectFour.css";
import PropTypes from "prop-types";

const NUM_COL = 7;
const NUM_ROW = 6;
const NUM_TO_WIN = 4;

export default function ConnectFour() {
  const [{ board, winner, isGameOver, currentPlayer }, dispatchBoard] =
    useReducer(reducer, genEmptyState());

  return (
    <>
      <div className="turnTracker">
        {winner == null && currentPlayer === 1 && <h1>It is <span className="red">Red&apos;s</span> turn</h1>}
        {winner == null && currentPlayer === 2 && <h1>It is <span className="blue">Blue&apos;s</span> turn</h1>}
      </div>
      <div className="turnTracker">
        {winner != null && winner === 1 && <h1 id="winner"><span className="red">Red</span> Wins!</h1>}
        {winner != null && winner === 2 && <h1 id="winner"><span className="blue">Blue</span> Wins!</h1>}
      </div>
      <div className="connectBoard">
        {board.map((colEntries, colIndex) => {
          const onClickCol = () => {
            dispatchBoard({ type: "move", colIndex });
          };
          return (
            <Column key={colIndex} entries={colEntries} onClick={onClickCol} />
          );
        })}
      </div>
      {isGameOver && (
        <button
        className="connect4-restartButton"
          onClick={() => {
            dispatchBoard({ type: "restart" });
          }}
        >
          Restart
        </button>
      )}
    </>
  );
}

function Column({ entries, onClick }) {
  return (
    <div className="connectColumn" onClick={onClick}>
      {entries.map((entry, rowIndex) => {
        return (
          <div key={rowIndex} className="connectTile">
            {entry != null && <div className={`player player-${entry}`} />}
          </div>
        );
      })}
    </div>
  );
}

Column.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func.isRequired,
};

function reducer(state, action) {
  switch (action.type) {
    case "restart":
      return genEmptyState();
    case "move": {
      const relevantCol = state.board[action.colIndex];
      const colIsFull = relevantCol[0] != null;
      if (state.isGameOver || colIsFull) {
        return state;
      }

      const { board, currentPlayer } = state;
      const boardClone = [...board];
      const colClone = [...relevantCol];

      const rowIndex = colClone.lastIndexOf(null);
      colClone[rowIndex] = currentPlayer;
      boardClone[action.colIndex] = colClone;

      const didWinVertical = didWin(
        rowIndex,
        action.colIndex,
        1,
        0,
        boardClone,
        currentPlayer
      );

      const didWinHorizolntal = didWin(
        rowIndex,
        action.colIndex,
        0,
        1,
        boardClone,
        currentPlayer
      );

      const didWinDiagonal =
        didWin(rowIndex, action.colIndex, 1, 1, boardClone, currentPlayer) ||
        didWin(rowIndex, action.colIndex, -1, 1, boardClone, currentPlayer);

      const winner =
        didWinVertical || didWinHorizolntal || didWinDiagonal
          ? currentPlayer
          : null;

      const isBoardFull = boardClone.every((column) =>
        column.every((value) => value != null)
      );

      return {
        board: boardClone,
        currentPlayer: currentPlayer === 1 ? 2 : 1,
        winner: winner,
        isGameOver: winner != null || isBoardFull,
      };
    }
    default:
      throw new Error("Unexpected action type");
  }
}

function genEmptyState() {
  return {
    board: new Array(NUM_COL)
      .fill(null)
      .map(() => new Array(NUM_ROW).fill(null)),
    currentPlayer: 1,
    winner: null,
    isGameOver: false,
  };
}

function didWin(
  startingRow,
  startingCol,
  rowIncrement,
  colIncrement,
  board,
  currentPlayer
) {
  let numInRow = 0;
  let currRow = startingRow;
  let currCol = startingCol;

  while (
    currCol < NUM_COL &&
    currRow < NUM_ROW &&
    board[currCol][currRow] === currentPlayer
  ) {
    numInRow++;
    currRow += rowIncrement;
    currCol += colIncrement;
  }

  currRow = startingRow - rowIncrement;
  currCol = startingCol - colIncrement;
  while (
    currCol >= 0 &&
    currRow >= 0 &&
    board[currCol][currRow] === currentPlayer
  ) {
    numInRow++;
    currRow -= rowIncrement;
    currCol -= colIncrement;
  }
  return numInRow >= NUM_TO_WIN;
}
