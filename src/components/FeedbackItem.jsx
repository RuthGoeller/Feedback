import Card from "../shared/Card"
import { useContext } from "react"
import { FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../Context/feedbackContext"

function FeedbackItem({item}) {

  const {deleteFeedbak, editFeedback} = useContext(FeedbackContext)
  const handleClick = (id) => {
    console.log(id)
  }
  return (
    <Card>
          <div className='num-display'>{item.rating}</div>
          <button onClick = {() => deleteFeedbak(item.id)} className="close"> <FaTimes color="purple"/>
          </button>
          <button onClick={() => editFeedback(item)} className="edit">
            <FaEdit color="purple"/>
          </button>
          <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
