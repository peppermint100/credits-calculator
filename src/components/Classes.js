import React, { useEffect } from "react";
import ClassInput from "./ClassInput";
import Class from "./Class";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, removeCourse } from "./actions/actions";

function Classes() {
  const courses = useSelector(state => state.courseReducer);
  const dispatch = useDispatch();
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
  return (
    <>
      <ClassInput handleSubmit={handleSubmit} />
      <Class courses={courses} />
    </>
  );
}

export default Classes;
