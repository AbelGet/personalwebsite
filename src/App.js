import React, { useRef, useState } from "react";
import "./App.css";
import pic1 from "./File/Img/profile-pic (2).png";
import pic2 from "./File/Img/profile-pic (3).png";
import ebirr from "./File/Img/download.png";
import abelLogo from "./File/Img/abelLogo.png";
import InfoMind from "./File/Img/infoMind.png";
import phone from "./File/Img/phone.png";
import teletgarm from "./File/Img/telegram.png";
import email from "./File/Img/email.png";
import github from "./File/Img/github.png";
import download from "./File/Img/downloadIcon.png";
import Experience from "./Experience";
import Project from "./Project";
import emailjs from "@emailjs/browser";

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

  const [showDiv, setShowDiv] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lg1gjsk",
        "template_sgipzbr",
        form.current,
        "TCUZuvjfYwPZR8vOw"
      )
      .then(
        (result) => {
          setShowDiv(true);
          e.target.reset();
          setTimeout(() => {
            setShowDiv(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const CV = "http://localhost:3000/File/ABEL Getahun CURRICULUM VITAE.pdf";
  const DAAP = "http://localhost:3000/File/Abel Getahun DAAP.pdf";
  const LXD = "http://localhost:3000/File/Abel Getahun LXD.pdf";
  const python = "http://localhost:3000/File/Abel Getahun Python.pdf";
  const Tempo = "http://localhost:3000/File/Abel Getahun Tempo.pdf";
  const AdobeXD = "http://localhost:3000/File/Certificate Adobe XD.pdf";
  const dataScience = "http://localhost:3000/File/Python for data science.pdf";

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const alertOnResume = () => {
    alert("Please wait...The Resume is under construction");
  };

  const responsibility = [
    "Promotion",
    "New  Customer Registration",
    "Sending Electronic Money",
    "Reciving Electronic Money and Cash",
  ];

  const responsibility2 = [
    "Carfully review CV",
    "Carfully giving grades for CV",
    "Report everyone that has been reviewed",
  ];

  const responsibility3 = [
    "Design the Graphics of the webpage",
    "Codding the front-end of the website",
    "Hosting the website",
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="headerContainer">
          <div className="bgimg"></div>
          <header>
            <div className="headerContent">
              <div className="info">
                <h1 className="name">Abel Getahun Miheretu</h1>
                <h4 className="discription1">
                  Every Accomplishment Starts With The Decision To Try!!!
                </h4>
                <div className="contact">
                  <div className="contactLink">
                    <a href="tel:+251937603232">
                      <img src={phone} alt="" />
                      +251-937-603-232
                    </a>
                  </div>

                  <div className="contactLink">
                    <a
                      href="mailto:abelgetahun53@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={email} alt="" />
                      abelgetahun53@gmail.com
                    </a>
                  </div>
                  <div className="contactLink">
                    <a
                      href="https://t.me/Bellagetu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={teletgarm} alt="" />
                      Telegram
                    </a>
                  </div>
                  <div className="contactLink">
                    <a
                      href="https://github.com/AbelGet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="" />
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="button">
                  <button
                    className="download"
                    onClick={() => {
                      downloadFileAtURL(CV);
                    }}
                  >
                    <div className="contactLink" id="download">
                      <img src={download} alt="" />
                      Download CV
                    </div>
                  </button>
                  <button
                    className="download"
                    onClick={() => {
                      alertOnResume();
                    }}
                  >
                    <div className="contactLink">
                      <img src={download} alt="" />
                      Download Resume
                    </div>
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
                In 2022, I received my degree from Unity University. I'm a
                driven, dynamic, and open-minded person that is very
                detail-oriented. I am good at giving and receiving directions,
                cooperating with others, and working in a team environment. I'm
                also quite good at making decisions, picking things up quickly,
                and managing projects.
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
            <div className="experienceTitle">Experience</div>
            <div className="listExperince">
              <Experience
                pic={ebirr}
                name="E-birr Private Limited Company"
                discription="E-Birr is a telecom value-added and Mobile Financial Service provider established in 2016. E-Birr is using the safarifone Mobile financial services technology (MFS) and customized it in a way to fit the Ethiopian market. "
                responsibilitys={responsibility}
              />
              <Experience
                pic={InfoMind}
                name="Info Mind Solutions"
                discription="With more than 20 years of experience, IMS is the leading Human Resource solutions provider in Ethiopia. IMS has assisted over 2000 national and multi-national organizations in Ethiopia."
                responsibilitys={responsibility2}
              />
            </div>
            <div className="contentProject">
              <div className="projecttTitle">Project</div>
              <div className="listProject">
                <Project
                  projectImg={abelLogo}
                  projectName="Abel Printing and Advertising Work"
                  projectDescription="Abel Printing & Advertising Work, founded in 2010, is a full-service integrated advertising solution provider that serves the business and general public printing demands. They provide a wide range of advertising options, such as digital and static out-of-door and in-door advertising items including light boxes and reflective banners, display stands, stickers, automotive branding, wall branding, high-quality posters, and more."
                  responsibilitys={responsibility3}
                  link="https://abelprinting.netlify.app/"
                />
              </div>
            </div>
          </div>
          <div className="contactMe">
            <div className="allContactMe">
              <div className="formContent">
                <form action="" ref={form} onSubmit={sendEmail}>
                  <h2>Contact Me</h2>
                  <div className="input-group">
                    <label>First Name: </label>
                    <input type="text" placeholder="Abel" name="user_fname" />
                  </div>
                  <div className="input-group">
                    <label>Last Name: </label>
                    <input
                      type="text"
                      placeholder="Getahun"
                      name="user_lname"
                    />
                  </div>
                  <div className="input-group">
                    <label> Phone Number: </label>
                    <input
                      type="number"
                      placeholder="(+251)-937-603-232"
                      name="user_phno"
                    />
                  </div>
                  <div className="input-group">
                    <label> Email: </label>
                    <input
                      type="email"
                      placeholder="abelgetahun53@gmail.com"
                      name="user_email"
                    />
                  </div>
                  <div className="input-group">
                    <label> Message: </label>
                    <textarea
                      id=""
                      placeholder="Message"
                      name="user_message"
                    ></textarea>
                  </div>
                  <div className="btnNSuccess">
                    <button type="submit" className="btnSubmit">
                      {showDiv ? "Success" : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footerRowONe">
              <h1>Abel Getahun Miheretu</h1>
            </div>
            <div className="footerRowTwo">
              <h1>Contact</h1>
              <ul>
                <li>
                  <a href="tel: +251937603232">(+251)-937-60-323</a>
                </li>
                <li>
                  <a
                    href="https://github.com/AbelGet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:abelgetahun53@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Email{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/Bellagetu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.linkedin.com/in/abel-getahun5310"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linked In
                  </a>
                </li>
              </ul>
            </div>
            <div className="footerRowThree">
              <h1>Personale Qualification</h1>
              <ul>
                <li
                  onClick={() => {
                    downloadFileAtURL(Tempo);
                  }}
                >
                  Computer Science Bachelor’s Degree
                </li>
                <li
                  onClick={() => {
                    downloadFileAtURL(DAAP);
                  }}
                >
                  Dereja Academy Accelerator Program
                </li>
                <li
                  onClick={() => {
                    downloadFileAtURL(LXD);
                  }}
                >
                  Learning Experian Design
                </li>
                <li
                  onClick={() => {
                    downloadFileAtURL(python);
                  }}
                >
                  Python Programming Language
                </li>
                <li
                  onClick={() => {
                    downloadFileAtURL(dataScience);
                  }}
                >
                  Python for Data Science
                </li>
                <li
                  onClick={() => {
                    downloadFileAtURL(AdobeXD);
                  }}
                >
                  Adobe XD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
