import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [Feedback, setFeedback] = useState([{
        id: 1,
        text:'This item is from context',
        rating:7
    },
{
    id: 2,
    text:'This item is from context 1',
    rating: 5
},
{
id: 3,
text:'This item is from context 3',
rating: 10
},
    
]);

const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false
})

    const deleteFeedbak = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(Feedback.filter((item) => item.id !==id))
        }
      }

      const addFeedback = (newFeedback ) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...Feedback])
      }
    

const updateFeedback = (id, updItem) => {
    setFeedback(Feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
}

      //set item to be updated 
      const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit:true
        })
      }
    

    return <FeedbackContext.Provider value={{
        Feedback,
        deleteFeedbak,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>

        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext