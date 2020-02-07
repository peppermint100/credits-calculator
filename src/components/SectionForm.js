import React, { useState } from "react";

function SectionForm({ handleClick }) {
  const [section, setSection] = useState("Untitled");
  const onChange = e => {
    setSection(e.target.value);
  };
  const onClick = () => {
    handleClick(section);
  };
  return (
    <>
      <span>Type your major</span>
      <input onChange={onChange} type="text" placeholder="Section title" />
      <button onClick={onClick}>✔</button>
    </>
  );
}

export default SectionForm;
