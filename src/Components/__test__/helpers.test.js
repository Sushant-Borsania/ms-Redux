import { getMineNumber, getUnrevealedData } from "../Helpers/index";
//Testing helpers functions
describe("Testing helper functions", () => {
  it("should return an array with neighbour data", () => {
    const fn = jest.fn(getMineNumber);
    fn(
      [
        [
          {
            x: 0,
            y: 0,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 1,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          }
        ],
        [
          {
            x: 1,
            y: 0,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 1,
            y: 1,
            isMine: true,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          }
        ]
      ],
      2,
      2
    );

    expect(fn).toHaveReturnedWith([
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
        }
      ],
      [
        {
          x: 1,
          y: 0,
          isMine: false,
          neighbour: 1,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        },
        {
          x: 1,
          y: 1,
          isMine: true,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        }
      ]
    ]);
  });

  it("Neighbouring data revelear function should be called 1 time only", () => {
    const fn = jest.fn(getMineNumber);
    fn(
      [
        [
          {
            x: 0,
            y: 0,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 0,
            y: 1,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          }
        ],
        [
          {
            x: 1,
            y: 0,
            isMine: false,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          },
          {
            x: 1,
            y: 1,
            isMine: true,
            neighbour: 0,
            isRevealed: false,
            isEmpty: false,
            isFlagged: false
          }
        ]
      ],
      2,
      2
    );
    //
    expect(fn).toHaveBeenCalled();
  });
});

describe("Testing getUnrevealedData function on Click", () => {
  it("should reveal all the unrevealed data points", () => {
    const fn = jest.fn(getUnrevealedData);
    fn([
      [
        {
          x: 0,
          y: 0,
          isMine: false,
          neighbour: 1,
          isRevealed: true,
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
        }
      ],
      [
        {
          x: 1,
          y: 0,
          isMine: true,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        },
        {
          x: 1,
          y: 1,
          isMine: false,
          neighbour: 1,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        }
      ]
    ]);

    //
    expect(fn).toHaveReturnedWith(
      [
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
          x: 1,
          y: 0,
          isMine: true,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        },
        {
          x: 1,
          y: 1,
          isMine: false,
          neighbour: 1,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false
        }
      ]
    );
  });
});
