import React from "react"
import PropTypes from "prop-types"
class Show extends React.Component {
  render () {
    console.log(this.props.bread);
    
    return (
      <React.Fragment>
        <h1>{this.props.bread.name.replace(/(_|.jpg|.png)/gm, " ")}</h1>
          <div dangerouslySetInnerHTML={this.props.image}/>
        <p>
          {this.props.bread.description}
        </p>
      </React.Fragment>
    );
  }
}

Show.propTypes = {
  bread: PropTypes.object,
  image: PropTypes.object
};

export default Show
