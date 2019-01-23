import React from "react"
import axios from "axios"

class Search extends React.Component {

  constructor(props) {
    super(props);

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


  onSearch(e) {
    e.preventDefault();
    var data = this.refs.inputField.value;
    let temp = []
    axios.post('http://localhost:3000/api/v1/home/search', {string: data}).then(
      res => {
        axios.post("http://localhost:3000/api/v1/bread/search", {string: data}).then(
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
            this.forceUpdate()
          } 
        )
      }
    )
  }

  render () {
    return (
      <div>
        <h1>Search for a bread</h1>
        <form onSubmit={this.onSearch.bind(this)}>
          <input type="text" ref="inputField" placeholder='ex: "Snooddas", "Dahls", "Bake off"'></input>
        </form>

        <ul className="ul--bread">
          {this.state.list}
        </ul>

      </div>
    );
  }
}

export default Search