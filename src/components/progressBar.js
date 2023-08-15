import { useEffect, useState } from "react";
import { MAX, MIN } from "./constants";

// const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
const ProgressBar = (props) => {
  const [percent, setPercent] = useState(0);
  const currentValue = props.value;
  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(currentValue, MIN)));
    if (percent >= MAX) {
      props.onComplete();
    }
  }, [currentValue]);
  return (
    <>
      <div className="progress">
        <span style={{ color: percent > 49 ? "white" : "black" }}>
          {percent.toFixed()}%
        </span>
        <div
          // style={{ width: `${percent}%` }}
          style={{
            transform: `scaleX(${percent / MAX})`,
            transformOrigin: "left"
          }}
          role="progressbar"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={percent.toFixed()}
        />
      </div>
    </>
  );
};
export default ProgressBar;
