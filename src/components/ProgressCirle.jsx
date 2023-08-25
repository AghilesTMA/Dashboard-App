import React from "react";

const ProgressCirle = ({percentage}) => {
  const progressValue = 2*Math.PI*70*(100-percentage)/100;
  return (
    <svg  width="200" height="200" viewBox=" 0 0 200 200" className=" w-full h-full">
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#9b98f2"
          strokeWidth="1rem"
          strokeDasharray="439.8"
          strokeDashoffset="0"
        ></circle>
        <circle
          r="70"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#44b98e"
          strokeWidth="1rem"
          strokeDasharray="439.8"
          strokeDashoffset={progressValue}
        ></circle>
    </svg>
  );
};

export default ProgressCirle;
