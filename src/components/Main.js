import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ClassInput from "./ClassInput";
import Classes from "./Classes";
import AddSection from "./AddSection";
import Sections from "./Sections";

function Main() {
  return (
    <>
      <Header />
      <ClassInput />
      <Classes />
      <Header />
      <AddSection />
      <Sections />
    </>
  );
}

export default Main;
