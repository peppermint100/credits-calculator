import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "./actions/actions";

function Class({ courses }) {
  const dispatch = useDispatch();

  const onClickDelete = e => {
    const id = parseInt(e.target.value);
    dispatch(removeCourse(id));
  };
  return (
    <div>
      {courses.map(course => (
        <button key={course.id} onClick={onClickDelete} value={course.id}>
          {course.course}
        </button>
      ))}
    </div>
  );
}

export default Class;
