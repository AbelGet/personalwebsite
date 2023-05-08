const Experience = (props) => {
  return (
    <div className="experienceContent">
      <div>
        <img src={props.pic} alt="" className="experiencePic" />
        <h5 className="companyName">{props.name}</h5>
      </div>
      <div>
        <p>{props.discription}</p>
        <button id="openModal" className="readMore">
          read more...
        </button>
      </div>
    </div>
  );
};
export default Experience;
