const Experience = (props) => {
  const modal = document.getElementById("modal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  openModal.addEventListener("click", () => {
    modal.showModal();
  });
  return (
    <div className="allExperience">
      <div className="experienceContent">
        <div>
          <img src={props.pic} alt="" className="experiencePic" />
          <h5 className="companyName">{props.name}</h5>
        </div>
        <div>
          <p>{props.discription}</p>
          <button id="openModal" className="readMore">
            read more
          </button>
        </div>
      </div>
      <dialog className="dialog" id="modal">
        <div className="dialogImg">
          <img src={props.pic} alt="" />
          <h2>{props.name}</h2>
        </div>
        <div className="closeButton">
          <button className="closeModal">close</button>
        </div>
        <div className="dialogAbout">
          <h2>About The Company</h2>
          <p>{props.discription}</p>
          <h3> Responsibility </h3>
          <ul>
            <li>{props.respo}</li>
          </ul>
        </div>
      </dialog>
    </div>
  );
};
export default Experience;
