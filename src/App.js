import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container"></div>
    </>
  );
}

export default App;
