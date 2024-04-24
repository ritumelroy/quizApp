import { useParams } from "react-router-dom";
import data from "../data/data.json";
// import aIcon from "../images/";
import correct from "../images/icon-correct.svg";
import incorrect from "../images/icon-incorrect.svg";
// import A from "../images/A.svg";
// import B from "../images/B.svg";
// import C from "../images/C.svg";
// import D from "../images/D.svg";
import { MouseEvent, useRef, useState } from "react";

import Result from "./Result";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

function QuizMain() {
  const { id } = useParams();
  const quiz = Object.entries(data.quizzes);
  const total = quiz.length;
  let i = 0;
  for (i; i < total; i++) {
    if (quiz[i][1].title == id) {
      break;
    }
  }
  // console.log("ID", id);
  const { title, icon, questions } = quiz[i][1]; // get title and icon from here

  //   const { question, options, answer } = questions[6];

  const test = false;

  const [index, setIndex] = useState(0);
  // const [answerIndex, setAnswerIndex] = useState(0);
  const [lock, setLock] = useState(true);
  // const [optionLock, setOptionLock] = useState(true);
  const [chosen, setChosen] = useState(false);
  // const [option, setOption] = useState(any);
  //   const [score, setScore] = useState(0);
  const score = useRef<number>(0);
  const [finish, setFinish] = useState(false);

  const { question, options, answer } = questions[index]; // should i use useeffect?

  const ansIndex = Object.values(options).indexOf(answer);

  const Opt1 = useRef<HTMLButtonElement | null>(null);
  const Opt2 = useRef<HTMLButtonElement | null>(null);
  const Opt3 = useRef<HTMLButtonElement | null>(null);
  const Opt4 = useRef<HTMLButtonElement | null>(null);

  const optarray = [Opt1, Opt2, Opt3, Opt4];

  const handleSubmit = () => {
    if (!lock) {
      optarray.map((op) => {
        op.current?.classList.remove("correct");
        op.current?.classList.remove("incorrect");
        op.current?.children[0].classList.remove("wrong-selected");
        op.current?.children[0].classList.remove("correct-selected");
        if (op.current?.children[2]) {
          //   console.log(op.current?.children[2]);
          op.current?.removeChild(op.current?.children[2]);
        }
        return null;
      });
      if (index !== 9) {
        setLock(true);
        setIndex(index + 1);
        setChosen(false);
      } else {
        setLock(true);
        setIndex(0);
        setFinish(true);
      }
    } else {
      setChosen(true);
    }
  };

  const checkAns = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    selectedAns: string
  ) => {
    if (lock) {
      setLock(false);
      if (e.currentTarget.children[0].classList.contains("hover-option-icon")) {
        e.currentTarget.children[0].classList.remove("hover-option-icon");
      }

      if (answer === selectedAns) {
        score.current = score.current + 1;
        const element = `<img src=${correct} class="correct-icon" />`;
        e.currentTarget.classList.add("correct");
        e.currentTarget.children[0].classList.add("correct-selected");
        e.currentTarget.insertAdjacentHTML("beforeend", element);
      } else {
        e.currentTarget.classList.add("incorrect");
        e.currentTarget.children[0].classList.add("wrong-selected");
        const element = `<img src=${correct} class="correct-icon" />`;
        const incorrectElement = `<img src=${incorrect} class="correct-icon" />`;
        optarray[ansIndex].current!.classList.add("correct");
        optarray[ansIndex].current!.children[0].classList.add(
          "correct-selected"
        );
        optarray[ansIndex].current!.insertAdjacentHTML("beforeend", element);
        e.currentTarget.insertAdjacentHTML("beforeend", incorrectElement);
      }
    }
  };

  // const storeAnsIndex = (i: number) => {
  //   answerIndex.current = i;
  // };

  /*   const handleSelect = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ind: number
  ) => {
    // if (optionLock) {
    // setOptionLock(false);
    answerIndex.current = ind;
    e.currentTarget.classList.add("selected-option");
    console.log(e.currentTarget);
    // console.log(e.currentTarget.children);
    if (e.currentTarget.children[0].classList.contains("hover-option-icon")) {
      e.currentTarget.children[0].classList.remove("hover-option-icon");
    }
    e.currentTarget.children[0].classList.add("selected-option-icons");
    // }
  }; */

  const subHandleEnter = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.currentTarget.classList.remove("mouse-leave");
    e.currentTarget.classList.add("mouse-enter");
  };
  const subHandleLeave = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.currentTarget.classList.remove("mouse-enter");
    e.currentTarget.classList.add("mouse-leave");
  };

  const optionEnter = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    // e.currentTarget.classList.add("mouse-enter");
    // if (!e.currentTarget.classList.contains("selected-option"))
    if (lock) {
      e.currentTarget.children[0].classList.add("hover-option-icon");
    }
  };
  const optionLeave = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    // if (!e.currentTarget.classList.contains("selected-option"))
    if (lock) {
      e.currentTarget.children[0].classList.remove("hover-option-icon");
    }
  };

  return (
    <>
      <Header title={title} />
      {finish ? (
        <>
          <Result score={Number(score.current)} title={title} icon={icon} />
        </>
      ) : (
        <div className="selection-section">
          <section className="section-left">
            <p className="select-p"> Question {index + 1} out of 10</p>
            <h1 id="QuizMainH1Dark" className="question ">
              {question}
            </h1>
            <ProgressBar index={Number(index + 1)} total={questions.length} />
          </section>

          <section className="selection-btns ">
            <button
              id="ButtonDark"
              className="btn qbtn "
              ref={Opt1}
              onClick={(e) => {
                checkAns(e, options[0]);
              }}
              onMouseEnter={(e) => optionEnter(e)}
              onMouseLeave={(e) => optionLeave(e)}
            >
              <div className="option-icons ">
                <span className="option-span ">A</span>
              </div>

              {/* <img src={A} className="option-icons" /> */}
              <span className=" btn-span options">{options[0]}</span>
              {test ? <img src={incorrect} className="correct-icon" /> : <></>}
            </button>

            <button
              id="ButtonDark"
              className="btn qbtn"
              ref={Opt2}
              onClick={(e) => {
                checkAns(e, options[1]);
              }}
              onMouseEnter={(e) => optionEnter(e)}
              onMouseLeave={(e) => optionLeave(e)}
            >
              {/* <img src={B} className="option-icons" /> */}
              <div className="option-icons">
                <span className="option-span">B</span>
              </div>
              <span className=" btn-span options">{options[1]}</span>
            </button>

            <button
              id="ButtonDark"
              className="btn qbtn"
              ref={Opt3}
              onClick={(e) => {
                checkAns(e, options[2]);
              }}
              onMouseEnter={(e) => optionEnter(e)}
              onMouseLeave={(e) => optionLeave(e)}
            >
              {/* <img src={C} className="option-icons" /> */}
              <div className="option-icons">
                <span className="option-span">C</span>
              </div>
              <span className=" btn-span options">{options[2]}</span>
            </button>

            <button
              id="ButtonDark"
              className="btn qbtn"
              ref={Opt4}
              onClick={(e) => {
                checkAns(e, options[3]);
              }}
              onMouseEnter={(e) => optionEnter(e)}
              onMouseLeave={(e) => optionLeave(e)}
            >
              {/* <img src={D} className="option-icons" /> */}
              <div className="option-icons">
                <span className="option-span">D</span>
              </div>
              <span className=" btn-span options">{options[3]}</span>
            </button>

            <button
              id="ButtonDark"
              className="btn subbtn "
              onClick={() => handleSubmit()}
              onMouseEnter={(e) => subHandleEnter(e)}
              onMouseLeave={(e) => subHandleLeave(e)}
            >
              Next Question
            </button>

            {chosen ? (
              <section className="error-selection">
                <img className="not-chosen-img" src={incorrect} />{" "}
                <p className="not-chosen-p">Please select an answer</p>{" "}
              </section>
            ) : (
              <></>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default QuizMain;
