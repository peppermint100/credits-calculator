import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Section() {
  const sections = useSelector(state => state.sectionReducer);
  return (
    <Wrapper>
      {sections.map(section => {
        return (
          <SectionList>
            <Title>{section.title}</Title>
          </SectionList>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const SectionList = styled.section`
  border: 1px solid #000;
  border-radius: 10px;
  min-width: 10em;
  min-height: 10em;
`;
const Title = styled.h3`
  text-align: center;
`;

export default Section;
