import React from "react"
import axios from "axios"

class changeDatPriceSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {list: [], displayList: []}
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
                    <a href={"/changePrice/" + bread.id}> 
                      <img src={result.data[i]} alt="bread" className="ul__img ul_img--bread"/>
                    </a>
                    <p>{bread.description}</p>
                </li>
              )
              i++
            });
            this.setState({list: temp})
            this.setState({displayList: temp})
          }
        )
      }
    )
  }

  componentDidMount() {
    this.buildBread()
  }


  onSearch() {
    let newList = this.state.list.slice();

    for (let i = newList.length-1; i >= 0; i--) {
      const item = newList[i]
      const word = item.props.children[0].props.children[0].toLowerCase();
      if (!word.includes(this.refs.inputField.value)) {
        newList.splice(i, 1)
      }
    }
    this.setState({displayList: newList})
  }

  render () {
    return (
      <div>
        <h1>Which bread do you want to change the price on?</h1>
        <form>
          <input type="text" ref="inputField" placeholder='ex: "Snooddas", "Dahls", "Bake off"' onChange={this.onSearch.bind(this)}></input>
        </form>

        <ul className="ul--bread">
          {this.state.displayList}
        </ul>

      </div>
    );
  }
}

export default changeDatPriceSearch