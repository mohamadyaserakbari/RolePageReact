import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        style={{
          width: "50%",
          height: "40px",
          borderRadius: "12px",
          marginTop: "32px",
          padding: "0px 16px",
        }}
        placeholder={this.props.placeholder}
        className={this.props.className}
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
