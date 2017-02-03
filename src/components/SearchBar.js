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
      <div className="search-bar">
        <label id="zipcode" htmlFor="">Enter Zipcode:
          <input
            className="searchInput"
            type="number"
            // placeholder="Zipcode"
            value={this.state.zipcode}
            onChange={ event => this.onInputChange(event.target.value) } />
        </label>
      </div>
    );
  }

  onInputChange(zipcode) {
    this.setState({ zipcode });
    this.props.onSearchTermChange(zipcode);
  }
}

export default SearchBar;
