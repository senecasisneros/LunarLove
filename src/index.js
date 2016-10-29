import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


import MoonDetails from "./components/MoonDetails";
import MoonInfo from "./components/MoonInfo";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moon: [],
      phase: [],
      place: [],
      date: []
  };
  this.citySearch('oakland');

}
  citySearch(city) {
    axios.get(`https://api.aerisapi.com/sunmoon/92532?&client_id=RJ483JTv5hKMuW09hMzYF&client_secret=3tyzbporWFb6kv20yUQ2Jq1jNJfLeIAOYE4ZdUqA`)
      .then(response => {
            this.setState({
              moon: response.data.response[0].moon,
              phase: response.data.response[0].moon.phase,
              place: response.data.response[0].place,
              date: response.data.response[0]
            })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
    return (
      <div>
        <h1 className="title">Lunar Love</h1>
          <SearchBar onSearchTermChange={city => this.citySearch(city)}/>
          <MoonDetails  moon={this.state.moon} phase={this.state.phase} place={this.state.place} date={this.state.date}/>
          <MoonInfo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
