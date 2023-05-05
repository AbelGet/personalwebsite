import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/* <dialog className="dialog" id="modal">
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
</dialog>; */}