import React from "react";
import "../App.css";
import Product from "./Product";
import CategoryFilter from "./CategoryFilter";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => 
        this.setState({
          dogs: data
      }))
  }


  render() {
    return (
      <div>
        <div className="navbar">
          <h1>Products</h1>
          <CategoryFilter />
        </div>
        <Product image={this.state.dogs}/>
      </div>
    );
  }
  
}

export default App;
