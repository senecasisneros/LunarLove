import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
  };

  }
  render() {
    return (
      <div>
        <input type="text"
        value={this.state.city}
        onChange={ event => this.onInputChange(event.target.value) } />
        {/* <input type="date"/> */}
      </div>
    );
  }

  onInputChange(city) {  //method. Callback to App
    this.setState({ city });
    this.props.onSearchTermChange(city);
  }
  // onInputChangeDate() {
  //
  // }
}

export default SearchBar;
