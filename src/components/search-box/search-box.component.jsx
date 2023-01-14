import React, { Component } from "react";
import '../search-box/search-box.style.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={`search-box ${this.props.className}`}
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
