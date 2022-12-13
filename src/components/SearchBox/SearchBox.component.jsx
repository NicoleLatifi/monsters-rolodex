import "./SearchBox.styles.css";

const SearchBox = ({ className, onChangeHandler, placeholder }) => {
  return (
    <input
      className={`search-box ${className}`}
      onChange={onChangeHandler}
      placeholder={placeholder}
      type="search"
    />
  );
};

export default SearchBox;
