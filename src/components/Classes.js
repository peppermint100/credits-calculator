import React, { useEffect } from "react";
import ClassInput from "./ClassInput";
import Class from "./Class";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addCourse } from "./actions/courseActions";

function Classes() {
  const courses = useSelector(state => state.courseReducer);
  const dispatch = useDispatch();
  const dragDataID = useSelector(state => state.dragReducer);
  useEffect(() => {}, []);
  const handleSubmit = content => {
    let { id, course, credit } = content;
    let data = {
      id,
      course,
      credit
    };
    dispatch(addCourse(data));
  };

  // const onDrop = () => {
  //   console.log("drp!");
  // };
  // const onDragEnter = () => {
  //   console.log("drag enter!");
  // };
  // const onDragOver = e => {
  //   e.preventDefault(); //without this onDrop doesn't work.
  //   console.log("draggin over");
  // };
  return (
    <>
      <ClassInput handleSubmit={handleSubmit} />
      <CoursesArea>
        <Class courses={courses} />
      </CoursesArea>
    </>
  );
}

const CoursesArea = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;
export default Classes;
