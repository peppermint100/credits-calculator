import React from "react";

import Header from "./Header";
import Classes from "./Classes";
import Sections from "./Sections";

const course = "Course";
const section = "Section";

function Main() {
  return (
    <>
      <Header content={course} />
      <Classes />
      <Header content={section} />
      <Sections />
    </>
  );
}

export default Main;
