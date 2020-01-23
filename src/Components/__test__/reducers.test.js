import gameReducers from "../../Store/reducers/gameReducers";
import boardReducers from "../../Store/reducers/boardReducers";

describe("game reducer", () => {
  it("should return initial state - game reducer", () => {
    expect(gameReducers(undefined, {})).toEqual({
      height: 16,
      width: 16,
      mines: 40
    });
  });
});

describe("Board reducer", () => {
  it("should return initial state - board reducer", () => {
    expect(boardReducers(undefined, {})).toEqual({
      boardData: null,
      mineCount: 40,
      gameStatus: "In progress"
    });
  });

  it("should handle status change upon winning game - STATUS_CHANGE", () => {
    expect(
      boardReducers(
        { boardData: null, mineCount: 40, gameStatus: "In progress" },
        { type: "STATUS_CHANGE", details: "You Win" }
      )
    ).toEqual({
      boardData: null,
      mineCount: 40,
      gameStatus: "You Win"
    });
  });

  it("should handle the mine count upon adding flag - MINE_UPDATER", () => {
    expect(
      boardReducers(
        { boardData: null, mineCount: 40, gameStatus: "In Progress" },
        { type: "MINE_UPDATER", details: 39 }
      )
    ).toEqual({
      boardData: null,
      mineCount: 39,
      gameStatus: "In Progress"
    });
  });

  it("should create the board data with necessary details - CREATE_BOARD", () => {
    expect(
      boardReducers(
        {
          boardData: null,
          mineCount: 40,
          gameStatus: "In Progress"
        },
        {
          type: "CREATE_BOARD",
          details: [
            [
              {
                x: 0,
                y: 0,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 1,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 2,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 3,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 4,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 5,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 6,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 7,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 8,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 9,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 10,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 11,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 12,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 13,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 14,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              },
              {
                x: 0,
                y: 15,
                isMine: false,
                neighbour: 1,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
              }
            ]
          ]
        }
      )
    ).toEqual({
      boardData: [
        [
          {
            x: 0,
            y: 0,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 1,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 2,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 3,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 4,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 5,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 6,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 7,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 8,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 9,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 10,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 11,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 12,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 13,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 14,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 15,
            isMine: false,
            neighbour: 1,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          }
        ]
      ],
      mineCount: 40,
      gameStatus: "In Progress"
    });
  });
});
