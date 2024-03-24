import { progressProps } from "../models/result";

const ProgressBar = ({ index, total }: progressProps) => {
  //   const percentage = 10;
  //   console.log(total, progressWidth);
  const percentage = (index / total) * 100;
  return (
    <section className="progress-container">
      <div id="ProgressDark" className="progress ">
        <span
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </section>
  );
};

export default ProgressBar;
