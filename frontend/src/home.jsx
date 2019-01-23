import React from "react"
import axios from "axios"
import './home.sass'
class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {list: []}
  }

  buildBread = () => {
    let temp = []
    axios.get("http://localhost:3000/api/v1/home")
      .then(res => {
        axios.get("http://localhost:3000/api/v1/bread_images").then(
          result => {

            let bread = res.data;
            let i = 0;

            bread.forEach(bread => {
              temp.push(
                <li className="ul__li ul__li--bread">
                    <h2>{bread.name.replace(/(_|.jpg|.png)/gm, " ")} bröö</h2>
                    <a href={"bread/" + bread.id}> 
                      <img src={result.data[i]} alt="bread" className="ul__img ul_img--bread"/>
                    </a>
                    <p>{bread.description}</p>
                </li>
              )
              i++
            });
            this.setState({list: temp})
          }
        )
      }
    )
  }

  componentDidMount() {
    this.buildBread()
  }

  render () {
    return (
      <div className="div--index">
        <h1>Bread</h1>
        <ul className="ul--bread">
          {this.state.list}
        </ul>
      </div>
    );
  }
}

export default Home