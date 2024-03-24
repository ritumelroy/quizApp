import HTML from "../images/icon-html.svg";
import CSS from "../images/icon-css.svg";
import JavaScript from "../images/icon-js.svg";
import Accessibility from "../images/icon-accessibility.svg";
import { headerProps } from "../models/result";
import Switch from "./Switch";

const Header = ({ title }: headerProps) => {
  const iconArray = [HTML, CSS, JavaScript, Accessibility];
  const iconStr = ["HTML", "CSS", "JavaScript", "Accessibility"];
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
  return (
    <>
      <div className="h-container">
        <section className="h-left">
          <img src={icon} className={`icon-style ${style}`} />

          <span id="HeaderDarkSpan" className="h-span ">
            {title}
          </span>
        </section>
        <section>
          <Switch switchStyle="" />
        </section>
      </div>
    </>
  );
};

export default Header;
