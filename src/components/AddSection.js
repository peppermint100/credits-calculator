import React, { useState, useRef, useEffect } from "react";
import SectionForm from "./SectionForm";

function AddSection({ handleAddSection }) {
  const [form, setForm] = useState(false);
  const formRef = useRef(null);

  const onClickToggleForm = () => {
    if (!form) {
      formRef.current.style.display = "block";
      setForm(true);
    } else {
      formRef.current.style.display = "none";
      setForm(false);
    }
  };
  const handleClick = content => {
    handleAddSection(content);
  };
  return (
    <>
      <button onClick={onClickToggleForm}>+</button>
      <section ref={formRef} style={{ display: "none" }}>
        <SectionForm handleClick={handleClick} />
      </section>
    </>
  );
}

export default AddSection;
