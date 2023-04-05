import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData"
import Feedbacklist from "./components/Feedbacklist";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedbak = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
    
  }
  return (

    <>
    <Header text = "hello world"/>
    <div className="App">
    <Feedbacklist feedback = {feedback} handleDelete={deleteFeedbak}/>
    </div>
    </>
  );
}

export default App;
