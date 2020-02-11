import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Input({ handleClick }) {
  const [course, setCourse] = useState("");
  const [type, setType] = useState("major");
  const [credit, setCredit] = useState(0);
  const courseRef = useRef();
  const typeRef = useRef();

  const onChangeCourse = e => {
    setCourse(e.target.value);
  };

  const onChangeCredit = e => {
    setCredit(e.target.value);
  };

  const onChangeType = e => {
    setType(e.target.value);
  };

  const onClick = () => {
    let data = {
      id: Date.now(),
      course,
      type,
      credit
    };
    if (data.course === "" || data.credit === 0 || data.type === "") {
      window.alert("please type valid data");
    } else {
      handleClick(data);
    }
    courseRef.current.value = "";
    typeRef.current.value = type;
    setCourse("");
  };

  const onEnter = e => {
    if (e.charCode === 13) {
      e.preventDefault();
      onClick();
    }
  };

  useEffect(() => {});

  return (
    <div>
      <InputStyle
        ref={courseRef}
        onChange={onChangeCourse}
        type="text"
        placeholder="Course Name"
        onKeyPress={onEnter}
      />
      <SelectStyle onKeyPress={onEnter} ref={typeRef} onChange={onChangeType}>
        <option value="major">Major</option>
        <option value="sub-major">Sub-Major</option>
        <option value="liberal">Liberal</option>
      </SelectStyle>
      <InputStyle
        onKeyPress={onEnter}
        onChange={onChangeCredit}
        type="number"
        placeholder="Credit"
      />

      <Button onClick={onClick}>
        <span role="img" aria-label="add-button">
          ➕
        </span>
      </Button>
    </div>
  );
}

const InputStyle = styled.input`
  all: unset;
  border-bottom: 2px solid #999;
  margin: 1em;
  padding: 0.8em 0.5em;
`;

const SelectStyle = styled.select`
  all: unset;
  width: 200px;
  padding: 0.8em 0.5em;
  border-bottom: 2px solid #999;
  font-family: inherit;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Button = styled.button`
  all: unset;
  padding: 0.8em 2em;
  border: 2px solid #999;
  border-radius: 0.5em;
  cursor: pointer;
`;

export default Input;
