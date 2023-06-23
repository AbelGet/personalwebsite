import React, { useState } from "react";
const Experience = (props) => {
  const [isSliced, setIsSliced] = useState(true);

  const handleSliceToggle = () => {
    setIsSliced(!isSliced);
  };

  const slicedDescription = isSliced
    ? props.discription.slice(0, 100)
    : props.discription;

  const responsibilitys = props.responsibilitys.map((responsibilitys, index) => (
    <li key={index}>{responsibilitys}</li>
  ));

  return (
    <div className="experienceContent">
      <div>
        <img src={props.pic} alt="" className="experiencePic" />
        <h5 className="companyName">{props.name}</h5>
      </div>
      <div>
        <p className="discription">{slicedDescription}</p>
        <button id="openModal" className="readMore" onClick={handleSliceToggle}>
          {isSliced ? "Read more..." : "Show less"}
        </button>
        <div className="responsibilitys">
          <h5>Responsibility</h5>
          <ul>{responsibilitys}</ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
