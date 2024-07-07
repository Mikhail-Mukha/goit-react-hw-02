import React, { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbackList, setFeedbackList] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("feedback"));
    if (saveData) {
      return saveData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      pozitive: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackList((prev) => {
      const newFeedback = {
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
        total: prev.total + 1,
      };
      newFeedback.pozitive = (
        (newFeedback.good / newFeedback.total) *
        100
      ).toFixed(2);
      return newFeedback;
    });
  };

  const resetFeedback = () => {
    setFeedbackList({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      pozitive: 0,
    });
    setFeedbackGiven(false);
  };

  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedbackClick = (feedbackType) => {
    updateFeedback(feedbackType);
    setFeedbackGiven(true);
  };

  const totalFeedback =
    feedbackList.good + feedbackList.neutral + feedbackList.bad;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedbackList));
  }, [feedbackList]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedbackList={feedbackList} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default App;
