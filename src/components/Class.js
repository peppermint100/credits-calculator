import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCourse } from "./actions/courseActions";
import { dragData, dropData } from "./actions/dragActions";

function Class({ courses }) {
  const dispatch = useDispatch();
  const courseRef = useRef();

  useEffect(() => {});
  const onClickDelete = e => {
    const id = parseInt(e.target.value);
    dispatch(removeCourse(id));
  };

  const onDragStart = e => {
    console.log("drag started");
    dispatch(dragData(parseInt(e.target.value)));
  };
  const onDragEnd = e => {
    dispatch(dropData());
  };
  const onDrag = () => {};
  return (
    <div>
      {courses.map(course => (
        <button
          ref={courseRef}
          key={course.id}
          onClick={onClickDelete}
          value={course.id}
          draggable="true"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrag={onDrag}
        >
          {course.course}
        </button>
      ))}
    </div>
  );
}

export default Class;
