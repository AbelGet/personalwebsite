import React, { useState } from "react";
const Project = (props) => {
  const [isSliced, setIsSliced] = useState(true);

  const handleSliceToggle = () => {
    setIsSliced(!isSliced);
  };

  const slicedDescription = isSliced
    ? props.projectDescription.slice(0, 100)
    : props.projectDescription;

  const responsibilitys = props.responsibilitys.map(
    (responsibilitys, index) => <li key={index}>{responsibilitys}</li>
  );

  return (
    <div className="projectContent">
      <div>
        <img src={props.projectImg} alt="" className="projectPic" />
        <h5 className="projectName">{props.projectName}</h5>
      </div>
      <div>
        <p>{slicedDescription}</p>
        <button id="openModal" className="readMore" onClick={handleSliceToggle}>
          {isSliced ? "Read more..." : "Show less"}
        </button>
        <div className="responsibilitys">
          <h5>Responsibility</h5>
          <ul>{responsibilitys}</ul>
        </div>
        <a href={props.link}>{props.link}</a>
        <br />
      </div>
    </div>
  );
};
export default Project;
