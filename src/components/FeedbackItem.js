import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <div className="container">
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="purple" size={15} />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" size={15} />
        </button>
        <div className="text-display">{item.text}</div>
      </div>
    </div>
  );
}

export default FeedbackItem;
