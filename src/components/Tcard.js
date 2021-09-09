import React, { useState } from "react";
import "./Fcard.css";
import Images from "./avatar3.jpg";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";

import theme1 from "./themes2.jpg";
function Tcard({ Tone }) {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const handleClick = () => {
    setShow(false);
    setHide(!hide);
    console.log(show);
  };
  const showHanlde = () => {
    setHide(!hide);
    setShow(true);
  };
  return (
    <div className="t-card">
      {!hide && (
        <div>
          <img src={Images} alt="" />
          <h3>PRO</h3>
          <div
            style={{
              borderBottom: "3px solid #cf5bdf",
              margin: "0px 110px -10px",
            }}
          />
          <h2>
            $ <span style={{ fontSize: "45px" }}>{Tone}</span>
          </h2>
          <p style={{ color: "grey" }}>/month</p>
          <p style={{ fontWeight: "500" }}>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} /> 30
            projects
          </p>
          <p style={{ fontWeight: "500" }}>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} /> Get 10
            Getty pics
          </p>
        </div>
      )}

      {hide && (
        <div
          style={{
            marginTop: "136px",
            textAlign: "left",
            marginLeft: "50px",
            paddingTop: "-60px",
          }}
        >
          <button
            style={{
              float: "right",
              marginTop: "-80px",
              marginRight: "33px",
              border: "none",

              cursor: "pointer",
            }}
            onClick={showHanlde}
          >
            <CloseIcon />
          </button>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            30 projects
          </p>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            have done the assingments
          </p>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            Monitor show{" "}
          </p>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            No ads and private access avalailable
          </p>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            happy to see you
          </p>
          <p>
            {" "}
            <CheckIcon style={{ color: "orange", fontSize: "14px" }} />
            close option
          </p>
        </div>
      )}
      <a href="#1" className="see-more" onClick={handleClick}>
        {hide ? "see Less" : "see more"}
      </a>
      <div className="theme2">
        <img src={theme1} alt="" />
      </div>
      <button className="t-btn">collect</button>
    </div>
  );
}

export default Tcard;
