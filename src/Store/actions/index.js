export const createBoard = details => {
  return { type: "CREATE_BOARD", details };
};

export const statusChange = details => {
  return { type: "STATUS_CHANGE", details };
};

export const mineUpdater = details => {
  return { type: "MINE_UPDATER", details };
};
