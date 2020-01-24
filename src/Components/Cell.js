import React, { useState, useEffect } from "react";
import { ReactComponent as Mine } from "./imageFiles/bomb.svg";
import { ReactComponent as Flag } from "./imageFiles/flag.svg";

export default function Cell(props) {
  const [val, setVal] = useState(null);

  useEffect(() => {
    const { value } = props;
    if (value.isRevealed && value.isMine) {
      setVal("B");
    }
    if (value.isRevealed && !value.isMine && value.neighbour !== 0) {
      setVal(value.neighbour);
    }
    if (!value.isRevealed && value.isFlagged) {
      setVal("F");
    }
    if (!value.isRevealed && !value.isFlagged) {
      setVal(null);
    }
  }, [props]);

  function assignClassName() {
    let className =
      "cell" +
      (props.value.isRevealed ? "" : " hidden") +
      (props.value.isMine ? " is-mine" : "") +
      (props.value.isFlagged ? " is-flag" : "");
    return className;
  }

  return (
    <div className={assignClassName()} onClick={props.onClick} onContextMenu={props.onContextMenu}>
      {val === "B" ? <Mine /> : val === "F" ? <Flag /> : val}
    </div>
  );
}
