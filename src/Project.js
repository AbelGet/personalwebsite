const Project = (props) => {
  return (
    <div className="projectContent">
      <div>
        <img src={props.projectImg} alt="" className="projectPic" />
        <h5 className="projectName">{props.projectName}</h5>
      </div>
      <div>
        <p>{props.projectDescription}</p>
        <button id="openModal" className="readMore">
          read more...
        </button>
      </div>
    </div>
  );
};
export default Project;