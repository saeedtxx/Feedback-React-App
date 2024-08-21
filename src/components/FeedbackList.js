import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Stats from "./Stats";
import Form from "./Form";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <>
      <Form />
      <Stats />
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
