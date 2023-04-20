import {createContext, useState, useEffect} from 'react'



const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {
    const [Feedback, setFeedback] = useState([]);

//fetch

const fetchFeedback = async () => {
    const resp = await fetch('http://localhost:5000/feedback')
    const data = await resp.json()
    setFeedback(data)
}

    useEffect(() =>{
        fetchFeedback()
    },[])

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