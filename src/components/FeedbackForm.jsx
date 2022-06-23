import {useState, useContext, useEffect} from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    //making our constants to change states
    const[text, setText] = useState("")
    const[rating, setRating] = useState(10)
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

        //we put this in here as a dependency so that it
        //is clicked we call it
    }, [feedbackEdit])

    //making the state change through an event
    const handleTextChange = (e) => {
        if(text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== "" && text.trim().length < 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                //This is the shorthand form of doing
                // "something: something"
                text,
                rating
            }
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            setText("")
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {/*The value passed into rating select will dictate
            what rating is given, note the formatting*/}
            <RatingSelect  select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange}
                type="text"
                placeholder="Write a review"
                value={text}
                />
                <Button type="submit" isDisabled={btnDisabled}> Send </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm