import {useState} from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
    //making our constants to change states
    const[text, setText] = useState("")
    const[rating, setRating] = useState(10)
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[message, setMessage] = useState("")

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

  return (
    <Card>
        <form>
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