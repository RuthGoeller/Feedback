import { useState, useContext, useEffect } from 'react' 
import RatingSelect from './RatingSelect'
import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import FeedbackContext from '../Context/feedbackContext'



function FeedbackForm( ) {

  

  const [text, setText] = useState('')
  const [rating, setRating] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])


  const handleTextChange = (e) => {
 if(text === ''){
  setBtnDisabled(true)
  setMessage(null)
 }else if (text !== '' && text.trim().length <= 10){
setMessage('Text must be at least 10 characters')
setBtnDisabled(true)
 }else {
  setMessage(null)
  setBtnDisabled(false)
 }
 
setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else {
        addFeedback(newFeedback)
      }
      
setText('')
    }
  }
  return (
    <Card>
       
      <form onSubmit={handleSubmit}>
       
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select = {(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange= {handleTextChange} type="text" placeholder='write a review' defaultValue={text}/>
          <Button isdisabled={btnDisabled} type="submit">Submit</Button>
        </div>
        {message && <div className='message'>{message}</div> }
      </form>
      
    </Card>
  )
}

export default FeedbackForm
