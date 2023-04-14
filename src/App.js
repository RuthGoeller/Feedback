
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData"
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback ) => {
    console.log(newFeedback)
  }
  const deleteFeedbak = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
    
  }
  return (

    <Router>
      
    <Header/>
    <div className="App">
      <Routes>
      <Route exact path="/" element ={ <>
        <FeedbackForm handleAdd = {addFeedback}/>
      <FeedbackStats feedback={feedback}/>
    <Feedbacklist feedback = {feedback} handleDelete={deleteFeedbak}/>
      
      </>}>

    </Route>

    <Route path="/about" element = {<About/>}/>
    </Routes>
    </div>

<AboutIconLink/>

    </Router>
  );
}

export default App;
