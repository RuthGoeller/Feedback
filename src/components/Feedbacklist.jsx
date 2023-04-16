import React from 'react'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/feedbackContext'

function Feedbacklist() {
  const {Feedback} = useContext(FeedbackContext)


    if(!Feedback || Feedback.length === 0){
        return <p>no feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      {Feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Feedbacklist
