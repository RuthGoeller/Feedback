import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData"
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedbak = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
    
  }
  return (

    <>
    <Header/>
    <div className="App">
      <FeedbackForm/>
      <FeedbackStats feedback={feedback}/>
    <Feedbacklist feedback = {feedback} handleDelete={deleteFeedbak}/>
    </div>
    </>
  );
}

export default App;
