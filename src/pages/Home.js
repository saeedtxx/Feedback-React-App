import React from "react";
import FeedbackList from "../components/FeedbackList";
import Header from "../components/Header";
import AboutIcon from "../components/AboutIcon";

function Home() {
  return (
    <div>
      <Header />
      <FeedbackList />
      <AboutIcon />
    </div>
  );
}

export default Home;
