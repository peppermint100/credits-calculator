import React, { useEffect } from "react";

import Header from "./Header";

import MainBoard from "./MainBoard";
import SectionBoardInput from "./SectionBoardInput";
import SectionBoard from "./SectionBoard";

const course = "Course";
const section = "Section";
const data = [
  { id: 1, class: "javascript", credit: 3 },
  {
    id: 2,
    class: "react",
    credit: 3
  }
];
function Main() {
  useEffect(() => {});
  return (
    <>
      <Header content={course} />
      <MainBoard />
      <Header content={section} />
      <SectionBoardInput />
      <SectionBoard />
    </>
  );
}

export default Main;
