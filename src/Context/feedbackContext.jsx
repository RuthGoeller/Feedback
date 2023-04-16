import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [Feedback, setFeedback] = useState([{
        id: 1,
        text:'This item is from context',
        rating: 10
    },
{
    id: 2,
    text:'This item is from context 1',
    rating: 10
},
{
id: 3,
text:'This item is from context 3',
rating: 10
},
    
]);

    const deleteFeedbak = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(Feedback.filter((item) => item.id !==id))
        }
      }

      const addFeedback = (newFeedback ) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...Feedback])
      }
    
    

    return <FeedbackContext.Provider value={{
        Feedback,
        deleteFeedbak,
        addFeedback,
    }}>

        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext