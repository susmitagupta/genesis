import React ,{useState}from "react";
import Capture from "./Capture.png";

export default function About() {

  

   





  return (
    <div className="container my-4" >
      <div className="card">
        <img src={Capture} className="card-img-top"    style={{ width: 400, height: 400 }} alt="My Pic" />
        <div className="card-body">
          <h3 className="card-title">Susmita Gupta</h3>
          <p className="card-text">
            M | 6296669221<br/>
            E | guptasusmita24@gmail.com
          </p>
        </div>
      </div>
      
    </div>
  );
}
