import React from "react";
import "./Fcard.css";
import Images from "./avatar2.jpg";
import theme1 from "./themes3.jpg";
import CheckIcon from "@material-ui/icons/Check";
function Scard({ Sone }) {
  return (
    <div className="s-card">
      <img src={Images} alt="" />
      <h3>PLUS</h3>
      <div
        style={{ borderBottom: "3px solid #4398b5", margin: "0px 110px -10px" }}
      />
      <h2>
        $ <span style={{ fontSize: "45px" }}>{Sone}</span>
      </h2>
      <p style={{ color: "grey" }}>/month</p>
      <p style={{ marginTop: "10px", fontWeight: "500" }}>
        <CheckIcon style={{ color: "orange", fontSize: "14px" }} /> 10 projects
      </p>
      <p style={{ marginTop: "10px", fontWeight: "500" }}>
        <CheckIcon style={{ color: "orange", fontSize: "14px" }} /> Get 10 Getty
        pics
      </p>

      <div className="theme1" style={{ position: "relative" }}>
        <img src={theme1} alt="" />
      </div>
      <button className="s-btn">collect</button>
    </div>
  );
}

export default Scard;
