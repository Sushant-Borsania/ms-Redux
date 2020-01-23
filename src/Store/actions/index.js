export const createBoard = details => {
  return dispatch => {
    dispatch({ type: "CREATE_BOARD", details });
  };
};

export const statusChange = details => {
  return dispatch => {
    dispatch({ type: "STATUS_CHANGE", details });
  };
};

export const mineUpdater = details => {
  return dispatch => {
    dispatch({ type: "MINE_UPDATER", details });
  };
};
