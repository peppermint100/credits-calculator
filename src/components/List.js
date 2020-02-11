import React from "react";
import styled from "styled-components";
import Empty from "./Empty";
import Count from "./Count";
import Header from "./Header";
import { deleteFromLocalStorage } from "./customs/localStorageMethod";

function List({ majorCourses, subMajorCourses, liberalCourses, renderList }) {
  const onClickDelete = e => {
    let type = e.target.name;
    let id = parseInt(e.target.value);
    deleteFromLocalStorage(type, id, renderList);
  };

  return (
    <Wrapper>
      <Section>
        <Header content="Major" />
        {majorCourses.length === 0 || typeof majorCourses === "undefined" ? (
          <Empty />
        ) : (
          majorCourses.map(course => (
            <Course
              name={course.type}
              value={course.id}
              onClick={onClickDelete}
              key={course.id}
            >
              {course.course}
            </Course>
          ))
        )}
        <Count courses={majorCourses} />
      </Section>
      <Section>
        <Header content="Sub-Major" />
        {subMajorCourses.length === 0 ||
        typeof subMajorCourses === "undefined" ? (
          <Empty />
        ) : (
          subMajorCourses.map(course => (
            <Course
              name={course.type}
              value={course.id}
              onClick={onClickDelete}
              key={course.id}
            >
              {course.course}
            </Course>
          ))
        )}
        <Count courses={subMajorCourses} />
      </Section>
      <Section>
        <Header content="Liberal" />
        {liberalCourses.length === 0 ||
        typeof liberalCourses === "undefined" ? (
          <Empty />
        ) : (
          liberalCourses.map(course => (
            <Course
              name={course.type}
              value={course.id}
              onClick={onClickDelete}
              key={course.id}
            >
              {course.course}
            </Course>
          ))
        )}
        <Count courses={liberalCourses} />
      </Section>
    </Wrapper>
  );
}
const Section = styled.div`
  border-bottom: 2px solid #18dcff;
  margin: 2em;
  min-height: 10vh;
`;

const Course = styled.button`
  all: unset;
  padding: 0.5em 0.5em;
  border: 1.5px solid #18dcff;
  color: #18dcff;
  cursor: pointer;
  font-weight: 300;
  margin-left: 0.3em;
  &:hover {
    transition: opacity 0.3s;
    opacity: 0.2;
  }
`;

const Wrapper = styled.div`
  width: 90%;
`;

export default List;
