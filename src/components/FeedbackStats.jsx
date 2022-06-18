import {useContext} from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
//calculate ratings average
let average = feedback.reduce((accumulator, currentValue) => {
return accumulator + currentValue.rating
}, 0) / feedback.length

//the number is set to 1 decimal place
//if the number ends in a 0 then remove the 0
average = average.toFixed(1).replace(/[.,]0$/,"")

//output the length of the array
//output the average, if the average is 0 then instead of showing NaN
//show 0
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats