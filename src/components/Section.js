import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, removeCourse } from "./actions/courseActions";
import Class from "./Class";

function Section() {
  const sections = useSelector(state => state.sectionReducer);
  const dragDataID = useSelector(state => state.dragReducer);
  const currentCourses = useSelector(state => state.courseReducer);
  const dispatch = useDispatch();
  const sectionRef = useRef(null);
  const [courseList, setCourseList] = useState([]); //id, course, credit

  useEffect(() => {
    console.log(currentCourses);
    console.log(courseList);
  });
  const onDragOver = e => {
    e.preventDefault();
  };
  const onDrop = e => {
    let id = dragDataID;
    addToSection(id);
    dispatch(removeCourse(id));
  };

  const addToSection = id => {
    let data = currentCourses.find(course => course.id === id);
    setCourseList([...courseList, data]);
  };
  return (
    <Wrapper onDragOver={onDragOver} onDrop={onDrop}>
      {sections.map(section => {
        return (
          <SectionList key={section.id} draggable="true">
            <Title>{section.title}</Title>
            {/* <List>
              {courseList.length === 0
                ? "empty"
                : courseList.map(course => {
                    return <button key={course.id}>{course.course}</button>;
                  })}
            </List> */}

            {typeof courseList === "undefined" || courseList.length === 0 ? (
              ""
            ) : (
              <Class courses={courseList} />
            )}
          </SectionList>
        );
      })}
    </Wrapper>
  );
}

const List = styled.ul``;

const Wrapper = styled.div`
  display: flex;
`;
const SectionList = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  min-width: 10em;
  min-height: 10em;
`;
const Title = styled.h3`
  text-align: center;
`;

export default Section;
