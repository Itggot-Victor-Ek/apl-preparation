import React from "react"
import PropTypes from "prop-types"
class IcaIndex extends React.Component {

  buildBread(data){

    let list = []
    let i = 0
    this.props.bread.forEach(bread => {
        list.push(
            <li className="ul__li ul__li--bread">
                <h2>{bread.name.replace(/(_|.jpg|.png)/gm, " ")} bröö</h2>
                <a href={"/bread/" + bread.name} dangerouslySetInnerHTML={this.props.images[i]} />
                <p>{bread.description}</p>
            </li>
        )
        i++
    });
    return list
  }


  render () {
    return (
      <React.Fragment>
        <div className="div--index">
          <h1>Bread</h1>
          <ul className="ul--bread" >
            {this.buildBread()}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

IcaIndex.propTypes = {
    bread: PropTypes.array,
    images: PropTypes.array
};

export default IcaIndex
