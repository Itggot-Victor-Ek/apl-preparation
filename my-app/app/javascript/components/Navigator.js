import React from "react"
import PropTypes from "prop-types"
import "../../assets/stylesheets/navigator.sass"

class Navigator extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav>
          <ul className="ul__nav">
            <li className="li__nav">
              <a className="a__nav" href="/ica/index">index</a>
            </li>
            <li className="li__nav">
              <a className="a__nav" href="/ica/show">show</a>
            </li>
            <li className="li__nav">
              <a className="a__nav" href="/ica/show">do something else</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigator
