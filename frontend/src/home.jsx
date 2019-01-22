import React from "react"
import axios from "axios"
class Home extends React.Component {

  buildBread(){

    let list = []
    let i = 0
    this.props.bread.forEach(bread => {
        list.push(
            <li className="ul__li ul__li--bread">
                <h2>{bread.name.replace(/(_|.jpg|.png)/gm, " ")} bröö</h2>
                <a href={"bread/" + bread.id} dangerouslySetInnerHTML={this.props.images[i]} />
                <p>{bread.description}</p>
            </li>
        )
        i++
    });
    return list
  }

  render () {
    return (
      <div className="div--index">
        <h1>Bread</h1>
        <ul className="ul--bread" >
          {/* {this.buildBread()} */}
        </ul>
      </div>
    );
  }
}

export default Home