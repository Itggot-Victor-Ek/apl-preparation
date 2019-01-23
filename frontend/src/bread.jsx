import React from "react"
import axios from "axios"

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {name: "", img: [], description: "", id: props.match.params.id}
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
        this.setState({description: result.data.description, name: result.data.name})
      }
    )
  }

  render () {
    return (
      <div>
        <h1>{this.state.name.replace(/(_|.jpg|.png)/gm, " ")}</h1>
          <div/>
          {this.state.img}
        <p>
          {this.state.description}
        </p>
      </div>
    );
  }
}

export default Show