import React, { useState } from "react";

function MainBoardInput({ handleClick }) {
  const [course, setCourse] = useState("");
  const [credit, setCredit] = useState(0);

  const onChangeCourse = e => {
    setCourse(e.target.value);
  };

  const onChangeCredit = e => {
    setCredit(e.target.value);
  };

  const onClick = () => {
    let id = Date.now();
    let data = { id, course, credit };
    handleClick(data);
  };

  return (
    <>
      <input onChange={onChangeCourse} placeholder="Class name" />
      <input onChange={onChangeCredit} placeholder="credits" />
      <button onClick={onClick}>
        <span role="img" aria-label="plus">
          ➕
        </span>
      </button>
    </>
  );
}

export default MainBoardInput;
