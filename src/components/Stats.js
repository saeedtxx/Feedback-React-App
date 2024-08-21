import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function Stats() {
  const { feedback } = useContext(FeedbackContext);
  //calculating average rating
  let avg =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats container">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating : {isNaN(avg) ? 0 : avg.toFixed(1).replace(/[.,]0$/, "")}{" "}
      </h4>
    </div>
  );
}

export default Stats;
