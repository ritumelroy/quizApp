import sun from "../images/icon-sun-dark.svg";
import moon from "../images/icon-moon-dark.svg";
import darksun from "../images/icon-sun-light.svg";
import darkmoon from "../images/icon-moon-light.svg";
import { switchProps } from "../models/result";
import { useEffect, useState } from "react";

const Switch = ({ switchStyle }: switchProps) => {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
    console.log(isLight);
  };

  useEffect(() => {
    if (isLight) {
      toLight();
    } else {
      toDark();
    }
  }, [isLight]);

  const toDark = () => {
    document.body.classList.add("dark-container");
    document.querySelector("#HeaderDarkSpan")?.classList.add("dark-h-span");
    document.querySelector("#SectionDark")?.classList.add("dark-section-h");
    document.querySelector("#ResSectionDark")?.classList.add("dark-section-h");
    document.querySelector("#ResCard")?.classList.add("dark-res-card");
    document.querySelector("#SectionP")?.classList.add("dark-select-p");
    // document.querySelector("#ButtonDark1")?.classList.add("dark-button ");
    const allBtns = document.querySelectorAll("#ButtonDark");
    allBtns.forEach((btn) => btn.classList.add("dark-button"));
    allBtns.forEach((btn) => btn.classList.add("dark-btn"));

    document.querySelector("#QuizMainH1Dark")?.classList.add("dark-question");
    document.querySelector("#ProgressDark")?.classList.add("dark-progress");
  };

  const toLight = () => {
    document.body.classList.remove("dark-container");
    document.querySelector("#HeaderDarkSpan")?.classList.remove("dark-h-span");
    document.querySelector("#SectionDark")?.classList.remove("dark-section-h");
    document.querySelector("#ResCard")?.classList.remove("dark-res-card");
    document
      .querySelector("#ResSectionDark")
      ?.classList.remove("dark-section-h");
    document.querySelector("#SectionP")?.classList.remove("dark-select-p");
    // document.querySelector("#ButtonDark1")?.classList.add("dark-button ");
    const allBtns = document.querySelectorAll("#ButtonDark");
    allBtns.forEach((btn) => btn.classList.remove("dark-button"));
    allBtns.forEach((btn) => btn.classList.remove("dark-btn"));

    document
      .querySelector("#QuizMainH1Dark")
      ?.classList.remove("dark-question");
    document.querySelector("#ProgressDark")?.classList.remove("dark-progress");
  };

  return (
    <div className={`switch-container ${switchStyle}`}>
      {isLight ? <img src={sun} /> : <img src={darksun} />}
      <label className="switch">
        <input type="checkbox" value="light" onClick={() => toggleTheme()} />
        <span className="slider round"></span>
      </label>
      {isLight ? <img src={moon} /> : <img src={darkmoon} />}
    </div>
  );
};

export default Switch;
