import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Input from "./Input";
import {
  addToLocalStorage,
  setLocalStorage
} from "./customs/localStorageMethod";
import List from "./List";

const MAJOR = "major";
const SUBMAJOR = "sub-major";
const LIBERAL = "liberal";
const ARRAY = [];

function Main() {
  const [majorCourses, setMajorCourses] = useState([]);
  const [subMajorCourses, setSubMajorCourses] = useState([]);
  const [liberalCourses, setLiberalCourses] = useState([]);

  const renderList = () => {
    const majorDB = JSON.parse(localStorage.getItem(MAJOR));
    const subMajorDB = JSON.parse(localStorage.getItem(SUBMAJOR));
    const liberalDB = JSON.parse(localStorage.getItem(LIBERAL));
    setMajorCourses(majorDB);
    setSubMajorCourses(subMajorDB);
    setLiberalCourses(liberalDB);
  };
  useEffect(() => {
    const majorDB = localStorage.getItem(MAJOR);
    const subMajorDB = localStorage.getItem(SUBMAJOR);
    const liberalDB = localStorage.getItem(LIBERAL);
    if (majorDB === null) {
      localStorage.setItem(MAJOR, JSON.stringify(ARRAY));
    }
    if (subMajorDB === null) {
      localStorage.setItem(SUBMAJOR, JSON.stringify(ARRAY));
    }
    if (liberalDB === null) {
      localStorage.setItem(LIBERAL, JSON.stringify(ARRAY));
    }
    setLocalStorage(MAJOR, renderList);
  }, []);

  const handleClick = data => {
    const { type } = data;
    switch (type) {
      case MAJOR:
        addToLocalStorage(MAJOR, data);
        break;
      case SUBMAJOR:
        addToLocalStorage(SUBMAJOR, data);
        break;
      case LIBERAL:
        addToLocalStorage(LIBERAL, data);
        break;
      default:
        return;
    }
    renderList();
  };
  return (
    <Wrapper>
      <Input handleClick={handleClick} />
      <List
        majorCourses={majorCourses}
        subMajorCourses={subMajorCourses}
        liberalCourses={liberalCourses}
        renderList={renderList}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Main;
