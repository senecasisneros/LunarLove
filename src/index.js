import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


import MoonDetails from "./components/MoonDetails";
import MoonInfo from "./components/MoonInfo";
import SearchBar from "./components/SearchBar";

// https://api.aerisapi.com/sunmoon/minneapolis,mn?from=2012-01-01&to=2012-01-31&limit=31&client_id=RJ483JTv5hKMuW09hMzYF&client_secret=3tyzbporWFb6kv20yUQ2Jq1jNJfLeIAOYE4ZdUqA

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: null
  };

    axios.get('https://api.aerisapi.com/sunmoon/oakland,ca?from=2012-01-01&to=2012-01-31&limit=31&client_id=RJ483JTv5hKMuW09hMzYF&client_secret=3tyzbporWFb6kv20yUQ2Jq1jNJfLeIAOYE4ZdUqA')
      .then(response => {
        let { rise, transitISO, riseISO, setISO } = response.data.response[0].moon
        let { name, angle, illum, phase } = response.data.response[0].moon.phase
        let {  dateTimeISO } = response.data.response[0]
        let {  state } = response.data.response[0].place
        let city = response.data.response[0].place.name
          // let newData = response.data.response[0].moon.rise
            this.setState({
              newData: response,
              rise: rise,
              name: name,
              transitISO: transitISO,
              riseISO: riseISO,
              setISO: setISO,
              angle: angle,
              illum: illum,
              dateTimeISO: dateTimeISO,
              phase: phase,
              city: city,
              state: state
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
          <SearchBar />
          <MoonDetails
            rise={this.state.rise}
            newData={this.state.newData}
            name={this.state.name}
            transitISO={this.state.transitISO}
            riseISO={this.state.riseISO}
            setISO={this.state.setISO}
            angle={this.state.angle}
            illum={this.state.illum}
            phase={this.state.phase}
            dateTimeISO={this.state.dateTimeISO}
            city={this.state.city}
            state={this.state.state}/>
          <MoonInfo />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
