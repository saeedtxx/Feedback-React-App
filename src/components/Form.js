import React, { useContext, useEffect } from "react";
import Rating from "./Rating";
import FeedbackContext from "../context/FeedbackContext";

function Form() {
  const {
    handleSubmit,
    handleText,
    setRating,
    text,
    message,
    btnDisabled,
    feedbackEdit,
    setText,
    setbtnDisabled,
  } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setbtnDisabled(false);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <div className="container">
      <div className="card">
        <div>
          <form onSubmit={handleSubmit}>
            <Rating select={(rating) => setRating(rating)} />
            <div className="input-group">
              <input
                type="text"
                placeholder="Write a Review"
                value={text}
                onChange={handleText}
              />
              <button
                type="submit"
                disabled={btnDisabled}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default Form;
