import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
  };

  }
  render() {
    return (
      <div>
        <input type="text"
        value={this.state.zipcode}
        onChange={ event => this.onInputChange(event.target.value) } />
        {/* <input type="date"/> */}
      </div>
    );
  }

  onInputChange(zipcode) {  //method. Callback to App
    this.setState({ zipcode });
    this.props.onSearchTermChange(zipcode);
  }
  // onInputChangeDate() {
  //
  // }
}

export default SearchBar;
