import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Count({ courses }) {
  const [credits, setCredits] = useState(0);

  const pullCredit = data => {
    let arrayOfCredits = [];
    data.forEach(data => {
      arrayOfCredits.push(parseInt(data.credit));
    });
    return arrayOfCredits;
  };

  const calculate = credits => {
    let result = 0;
    credits.forEach(credit => {
      result += credit;
    });
    setCredits(result);
  };

  useEffect(() => {
    const creditData = pullCredit(courses);
    calculate(creditData);
  });

  return <Wrapper>{credits}</Wrapper>;
}

const Wrapper = styled.div`
  text-align: center;
  color: #18dcff;
  font-size: 2em;
  margin: 0.3em;
`;
export default Count;
