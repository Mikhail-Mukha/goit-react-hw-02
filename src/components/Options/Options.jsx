import React, { useState } from "react";

const Options = ({ updateFeedback, resetFeedback }) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedbackClick = (feedbackType) => {
    updateFeedback(feedbackType);
    setFeedbackGiven(true);
  };

  const handleResetClick = () => {
    resetFeedback();
    setFeedbackGiven(false);
  };

  return (
    <>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>
      {feedbackGiven && <button onClick={handleResetClick}>Reset</button>}
    </>
  );
};

export default Options;
