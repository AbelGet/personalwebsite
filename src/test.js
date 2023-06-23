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

  return (
    <div className="App">
      <div className="container">
        
        <div className="content">
          
          
          

          
        </div>
      </div>
    </div>
  );
}
export default App;
