import pic1 from "./File/Img/profile-pic (2).png";
import pic2 from "./File/Img/profile-pic (3).png";
import ebirr from "./File/Img/download.png";
import "./App.css";
import Experience from "./Experience";

function App() {
  const graphicsSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premier",
    "Figma",
  ];

  const dataBaseSkills = ["Ms SQL", "MySQL"];

  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React.js"];

  const backEndSkills = ["PHP"];

  const graphicsList = graphicsSkills.map((graphicsSkill) => (
    <li>{graphicsSkill}</li>
  ));

  const dataBaseList = dataBaseSkills.map((dataBaseSkill) => (
    <li>{dataBaseSkill}</li>
  ));

  const frontEndList = frontEndSkills.map((frontEndSkill) => (
    <li>{frontEndSkill}</li>
  ));

  const backEndList = backEndSkills.map((backEndSkill) => (
    <li>{backEndSkill}</li>
  ));
  return (
    <div className="App">
      <div className="container">
        <div className="bgimg"></div>
        <header>
          <div className="headerContent">
            <div className="info">
              <h1 className="name">Abel Getahun Miheretu</h1>
              <h4 className="discription">
                Every Accomplishment Starts With The Decision To Try!!!
              </h4>
              <div className="contact">
                <h4>
                  <a href="tel:+251937603232">+251-937-603-232</a>
                </h4>
                <h4>
                  <a href="mailto:abelgetahun53@gmail.com">
                    abelgetahun53@gmail.com
                  </a>
                </h4>
                <h4>
                  <a href="https://t.me/Bellagetu">@Bellagetu</a>
                </h4>
                <h4>
                  <a href="https://github.com/AbelGet">GitHub</a>
                </h4>
              </div>
              <div className="button">
                <button className="download">
                  <a
                    href="./File/File/ABEL Getahun CURRICULUM VITAE.pdf"
                    download
                  >
                    Download CV
                  </a>
                </button>
                <button className="download">
                  <a href="*">Download Resume</a>
                </button>
              </div>
            </div>
            <div className="pic">
              <img src={pic1} alt="" />
            </div>
          </div>
        </header>
      </div>
      <div className="content">
        <div className="aboutMe">
          <div className="aboutTitle">
            <h1>About Me</h1>
          </div>
          <div className="aboutMeContent">
            <div className="picAbout">
              <img src={pic2} alt="" />
            </div>
            <div className="aboutParagraph">
              In 2022, I received my degree from Unity University. I'm a driven,
              dynamic, and open-minded person that is very detail-oriented. I am
              good at giving and receiving directions, cooperating with others,
              and working in a team environment. I'm also quite good at making
              decisions, picking things up quickly, and managing projects.
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skillContent">
            <div className="skillTitle">Skill</div>
            <div className="contentSkill">
              <div className="rowOne">
                <div className="graphicsSkill">
                  <h3>Graphics Design</h3>
                  <ul className="skillname">{graphicsList}</ul>
                </div>
                <div className="dataBase">
                  <h3>DataBase Design</h3>
                  <ul className="skillname">{dataBaseList}</ul>
                </div>
              </div>
              <div className="rowTwo">
                <div className="frontEnd">
                  <h3>Front-End Development</h3>
                  <ul className="skillname">{frontEndList}</ul>
                </div>
                <div className="backEnd">
                  <h3>Back-End Development</h3>
                  <ul className="skillname">{backEndList}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="experiencetitle">Experience</div>
          <div className="listExperince">
            <Experience
              pic={ebirr}
              name="E-birr Private Limited Company"
              discription="E-Birr is a telecom value-added and Mobile Financial Service provider established in 2016. E-Birr is using the safarifone Mobile financial services technology (MFS) and customized it in a way to fit the Ethiopian market."
              link="https://abelprinting.netlify.app/"
            />
            <Experience
              pic={ebirr}
              name="E-birr Private Limited Company"
              discription="E-Birr is a telecom value-added and Mobile Financial Service provider established in 2016. E-Birr is using the safarifone Mobile financial services technology (MFS) and customized it in a way to fit the Ethiopian market."
              link="https://abelprinting.netlify.app/"
            />

            <Experience
              pic={ebirr}
              name="E-birr Private Limited Company"
              discription="E-Birr is a telecom value-added and Mobile Financial Service provider established in 2016. E-Birr is using the safarifone Mobile financial services technology (MFS) and customized it in a way to fit the Ethiopian market."
              link="https://abelprinting.netlify.app/"
            />

          

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
