import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <BrowserRouter>
      <FeedbackProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </FeedbackProvider>
    </BrowserRouter>
  );
}

export default App;
