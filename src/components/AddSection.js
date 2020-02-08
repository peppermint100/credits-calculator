import React, { useState, useRef } from "react";
import SectionForm from "./SectionForm";
import { removeSection } from "./actions/sectionActions";
import { useDispatch } from "react-redux";

function AddSection({ handleAddSection }) {
  const [form, setForm] = useState(false);
  const formRef = useRef(null);
  const dispatch = useDispatch();
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

  const handleDeleteSection = () => {
    dispatch(removeSection());
  };
  return (
    <>
      <button onClick={onClickToggleForm}>+</button>
      <section ref={formRef} style={{ display: "none" }}>
        <SectionForm
          handleClick={handleClick}
          handleDeleteSection={handleDeleteSection}
        />
      </section>
    </>
  );
}

export default AddSection;
