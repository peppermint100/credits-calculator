import React from "react";
import AddSection from "./AddSection";
import Section from "./Section";
import { addSection, removeSection } from "./actions/actions";
import { useSelector, useDispatch } from "react-redux";

function Sections() {
  const section = useSelector(state => state.sectionReducer);
  const dispatch = useDispatch();

  const handleAddSection = content => {
    console.log(content);
    let title = content;
    let id = Date.now();
    let data = {
      id,
      title
    };
    dispatch(addSection(data));
  };
  return (
    <>
      <AddSection handleAddSection={handleAddSection} />
      <Section />
    </>
  );
}

export default Sections;
