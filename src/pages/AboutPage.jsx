import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

//This is still a component, the only reason it is in a
//seperate folder is for organization to show it is working
//for a different page
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>1.0.0</p>
                <Link to="/">Back to Home</Link>
        </div>
    </Card>
  )
}

export default AboutPage