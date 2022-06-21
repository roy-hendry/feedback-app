import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
        <div className="container">
          <Link to="/" style={headerStyles}>
            <h2>{text}</h2>
          </Link>
        </div>
    </header>
  )
}

//It is valuable to note that these are the values that
//will be defaulted to however we can manually overwrite them
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header