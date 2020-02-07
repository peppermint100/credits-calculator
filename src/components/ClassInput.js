import React, { useState } from "react";

function ClassInput({ handleSubmit }) {
  const [course, setCourse] = useState("");
  const [credit, setCredit] = useState(0);

  const onChangeCourse = e => {
    setCourse(e.target.value);
  };

  const onChangeCredit = e => {
    setCredit(e.target.value);
  };

  const onSubmit = () => {
    let block = {
      id: Date.now(),
      course,
      credit
    };
    handleSubmit(block);
  };
  return (
    <>
      <input type="text" placeholder="Class Name" onChange={onChangeCourse} />
      <input type="number" placeholder="Credits" onChange={onChangeCredit} />
      <button onClick={onSubmit}>Add</button>
    </>
  );
}

export default ClassInput;
