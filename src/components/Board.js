import React from "react";
import styled from "styled-components";
function Board() {
  return <BoardFrame>board</BoardFrame>;
}

const BoardFrame = styled.div`
  border: 1px solid black;
  min-width: 300px;
  min-height: 300px;
  border-radius: 10px;
`;

export default Board;
