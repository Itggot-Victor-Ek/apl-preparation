import React from "react"
import PropTypes from "prop-types"
class Search extends React.Component {

  constructor(props) {
    super(props);

    this.inputField = React.createRef();
  }

  onSearch(e) {
    e.preventDefault();
    var data = React.findDOMNode(this.ref.inputField).value;
    console.log(data);
  }

  render () {
    return (
      <React.Fragment>
        <h1>Search for a bread</h1>
        <form onSubmit={this.onSearch}>
          <input type="text" ref={this.inputField} placeholder='ex: "Snooddas", "Dahls", "Bake off"'></input>
        </form>

      </React.Fragment>
    );
  }
}

Search.propTypes = {
  bread: PropTypes.array,
  images: PropTypes.array
};

export default Search
