import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return <div className="container">Hola</div>;
}

export default App;
