import React, { useState } from "react";

const Feedback = ({ feedbackList }) => {
  return (
    <>
      <ul>
        <li> Good: {feedbackList.good}</li>
        <li> Neutral: {feedbackList.neutral}</li>
        <li> Bad: {feedbackList.bad}</li>
        <li> Total: {feedbackList.total}</li>
        <li> Pozitive: {feedbackList.pozitive}</li>
      </ul>
    </>
  );
};

export default Feedback;
