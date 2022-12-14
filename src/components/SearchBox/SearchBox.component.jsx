import { Component } from "react";

import "./SearchBox.styles.css";

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type="search"
      />
    );
  }
}

export default SearchBox;
