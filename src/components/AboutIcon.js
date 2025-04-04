import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
function AboutIcon() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={40} />
      </Link>
    </div>
  );
}

export default AboutIcon;
