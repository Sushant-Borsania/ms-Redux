import * as actions from "../../Store/actions/index";

describe("actions", () => {
  it("should change the status", () => {
    const details = "Game Over";
    const expectedAction = {
      type: "STATUS_CHANGE",
      details
    };
    expect(actions.statusChange(details)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should update the mine number", () => {
    const details = 39;
    const expectedAction = {
      type: "MINE_UPDATER",
      details
    };
    expect(actions.mineUpdater(details)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create the board with necessary details", () => {
    const details = [
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
    ];
    const expectedAction = {
      type: "CREATE_BOARD",
      details
    };
    expect(actions.createBoard(details)).toEqual(expectedAction);
  });
});
