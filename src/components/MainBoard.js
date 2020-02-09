import React, { useState, useEffect } from "react";
import MainBoardInput from "./MainBoardInput";
import Board from "./Board";
import {
  addToLocalStorage,
  setLocalStorage
} from "./customs/localStorageMethod";

const mainboard = "mainboard";

function MainBoard() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setLocalStorage(mainboard, setCourses);
  }, []);

  const handleClick = value => {
    addToLocalStorage(mainboard, value);
  };

  return (
    <>
      <MainBoardInput handleClick={handleClick} />
      <Board courses={courses} />
    </>
  );
}

export default MainBoard;
