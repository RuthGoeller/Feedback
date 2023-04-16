
import React from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import {FeedbackProvider} from "./Context/feedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {

  return (
<FeedbackProvider>
    <Router>
      
    <Header/>
    <div className="App">
      <Routes>
      <Route exact path="/" element ={ <>
        <FeedbackForm/>
      <FeedbackStats/>
    <Feedbacklist />
      
      </>}>

    </Route>

    <Route path="/about" element = {<About/>}/>
    </Routes>
    
    </div>

<AboutIconLink/>

    </Router>
    </FeedbackProvider>
  );
}

export default App;
