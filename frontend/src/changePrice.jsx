import React from "react"
import axios from "axios"

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {name: "Loading", img: [], description: "Loading", id: props.match.params.id, category: "Loading"}
  }

  componentDidMount() {
    this.get_picture()
    this.get_info()
  }

  get_picture() {
    axios.get(`http://localhost:3000/api/v1/bread_images/${this.state.id}`).then(
      result => {
        let image = <img src={result.data} alt="BrEaD"/>
        this.setState({img: image})
      })
  }

  get_info() {
    axios.get(`http://localhost:3000/api/v1/home/${this.state.id}`).then(
      result => {
        let data = result.data
        this.setState({description: data.description, name: data.name, price: data.price, category: data.category})
      }
    )
  }

  submitPrice() {
    axios.patch(`http://localhost:3000/api/v1/home/${this.state.id}`, {price: this.refs.inputField.value, id: this.state.id})
  }

  render () {
    return (
      <div>
        <h1>{this.state.name.replace(/(_|.jpg|.png)/gm, " ")}</h1>
        {this.state.img}
        <h2>bröd sort: {this.state.category}</h2>
        <p>
          {this.state.description}
        </p>
        <h2>Pris: {this.state.price}kr</h2>
        <form onSubmit={this.submitPrice.bind(this)}>
          <input type="text" ref="inputField" placeholder='Nytt Pris:'></input>
          <button>Send Data</button>
        </form>
      </div>
    );
  }
}

export default Show