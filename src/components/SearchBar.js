import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text"/>
        <input type="date"/>
      </div>
    );
  }

  onInputChange() {

  }
  onInputChangeDate() {

  }
}

export default SearchBar;
