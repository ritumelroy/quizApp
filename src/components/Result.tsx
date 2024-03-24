import { resultProps } from "../models/result";
import { useNavigate } from "react-router-dom";
import HTML from "../images/icon-html.svg";
import CSS from "../images/icon-css.svg";
import JavaScript from "../images/icon-js.svg";
import Accessibility from "../images/icon-accessibility.svg";

const Result = ({ score, title }: resultProps) => {
  const iconArray = [HTML, CSS, JavaScript, Accessibility];
  const iconStr = ["HTML", "CSS", "JavaScript", "Accessibility"];
  //const icon = HTML;
  const ind = iconStr.indexOf(title);
  let style = "";
  const icon = iconArray[ind];

  switch (ind) {
    case 0:
      style = "html";
      break;
    case 1:
      style = "css";
      break;
    case 2:
      style = "js";
      break;
    case 3:
      style = "acc";
      break;
  }
  const navigate = useNavigate();

  return (
    <div className="selection-section res-section">
      <section className="section-left">
        <h1 id="ResSectionDark" className="section-h">
          Quiz completed <span>You scored...</span>
        </h1>
      </section>
      <div className="selection-btns ">
        <section id="ResCard" className="res-card">
          <p className="first-res">
            <img src={icon} className={`icon-style ${style}`} />
            <span>{title}</span>
          </p>
          <p className="second-res"> {score}</p>
          <p className="third-res"> out of 10 </p>
        </section>
        <button
          className="again subbtn"
          onClick={() => {
            navigate("/");
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
