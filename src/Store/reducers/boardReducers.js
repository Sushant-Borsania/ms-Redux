const initState = {
  boardData: null,
  mineCount: 40,
  gameStatus: "In progress"
};
const boardReducers = (state = initState, action) => {
  // return state;
  switch (action.type) {
    case "CREATE_BOARD":
      return {
        ...state,
        boardData: action.details
      };
    case "STATUS_CHANGE":
      return {
        ...state,
        gameStatus: action.details
      };
    case "MINE_UPDATER":
      return {
        ...state,
        mineCount: action.details
      };
    default:
      return state;
  }
};

export default boardReducers;
