import React, { useState, useRef } from "react";
const INPUT_ERR_MSG = "course name cannot be empty space";
function ClassInput({ handleSubmit }) {
  const [course, setCourse] = useState("");
  const [credit, setCredit] = useState(0);
  const courseRef = useRef(null);
  const onChangeCourse = e => {
    setCourse(e.target.value);
  };

  const onChangeCredit = e => {
    setCredit(e.target.value);
  };

  const onSubmit = () => {
    if (course === "" || course === null) {
      alert(INPUT_ERR_MSG);
    } else {
      let block = {
        id: Date.now(),
        course,
        credit
      };
      handleSubmit(block);
      courseRef.current.value = "";
      setCourse("");
    }
  };
  return (
    <>
      <input
        ref={courseRef}
        type="text"
        placeholder="Class Name"
        onChange={onChangeCourse}
      />
      <input type="number" placeholder="Credits" onChange={onChangeCredit} />
      <button onClick={onSubmit}>➕</button>
    </>
  );
}

export default ClassInput;
