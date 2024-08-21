import { useState, createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget.",
    },
    {
      id: 2,
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus.",
    },
    {
      id: 3,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis.",
    },
  ]);

  //  states
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  //edit state
  let [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //update feedback
  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
    );
    feedbackEdit.edit = false;
    setText("");
    setbtnDisabled(true);
  };

  //delete feecback
  const deleteFeedback = (item) => {
    if (window.confirm("Are You Sure ?")) {
      setFeedback(feedback.filter((i) => i.id !== item));
    }
  };

  // add new feedback
  const handleAdd = (newfeedback) => {
    setFeedback([newfeedback, ...feedback]);
    setText("");
    setbtnDisabled(true);
  };

  // edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // textbox handle
  const handleText = (e) => {
    if (e.target.value === "") {
      setbtnDisabled(true);
      setMessage("");
    } else if (e.target.value !== "" && e.target.value.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setbtnDisabled(true);
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  // submit feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      setMessage("Thank you for your feedback");
      const newFeedback = {
        id: Date.now(),
        rating,
        text,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else handleAdd(newFeedback);
    } else {
      setMessage("Text must be at least 10 characters");
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        text,
        message,
        btnDisabled,
        feedbackEdit,
        deleteFeedback,
        handleAdd,
        handleText,
        handleSubmit,
        setRating,
        editFeedback,
        setText,
        setbtnDisabled,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
