import React, { useState, useRef } from "react";

function SectionForm({ handleClick, handleDeleteSection }) {
  const [section, setSection] = useState("Untitled");
  const inputValue = useRef(null);
  const onChange = e => {
    setSection(e.target.value);
  };
  const onClick = () => {
    handleClick(section);
    inputValue.current.value = "";
  };

  const onClickDeleteSection = () => {
    handleDeleteSection();
  };
  return (
    <>
      <span>Type your major</span>
      <input
        ref={inputValue}
        onChange={onChange}
        type="text"
        placeholder="Section title"
      />
      <button onClick={onClick}>
        <span role="img" aria-label="add-section">
          ✔
        </span>
      </button>
      <button onClick={onClickDeleteSection}>
        <span role="img" aria-label="remove-section">
          ➖
        </span>
      </button>
    </>
  );
}

export default SectionForm;
