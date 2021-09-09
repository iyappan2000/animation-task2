import React from "react";
import "./Fcard.css";
import Images from "./avatar1.jpg";
import theme1 from "./themes1.jpg";
import CheckIcon from "@material-ui/icons/Check";

function Fcard({ Fone }) {
  return (
    <div className="card">
      <img src={Images} alt="" />
      <h3>BASIC</h3>
      <div
        style={{ borderBottom: "3px solid #4398c2", margin: "0px 110px -10px" }}
      />
      <h2>
        $ <span style={{ fontSize: "45px" }}>{Fone}</span>
      </h2>
      <p style={{ color: "grey" }}>/month</p>
      <p style={{ marginTop: "10px", fontWeight: "500" }}>
        {" "}
        <CheckIcon style={{ color: "orange", fontSize: "14px" }} />5 projects
      </p>

      <div className="theme" style={{ position: "relative" }}>
        <img src={theme1} alt="" />
      </div>
      <button className="f-btn">collect</button>
    </div>
  );
}

export default Fcard;
