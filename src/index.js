import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import _ from "lodash";

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
  this.zipcodeSearch('92532');

}
  zipcodeSearch(zipcode) {
    axios.get(`https://api.aerisapi.com/sunmoon/${zipcode}?&client_id=RJ483JTv5hKMuW09hMzYF&client_secret=3tyzbporWFb6kv20yUQ2Jq1jNJfLeIAOYE4ZdUqA`)
      .then(response => {
        console.log('response:', response);
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
    const zipcodeSearch = _.debounce((zipcode) => { this.zipcodeSearch(zipcode)}, 300);

    return (
      <div>
        <h1 className="title">Lunar Love</h1>
          <SearchBar onSearchTermChange={zipcodeSearch}/>
          <MoonDetails  moon={this.state.moon} phase={this.state.phase} place={this.state.place} date={this.state.date}/>
          <MoonInfo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
