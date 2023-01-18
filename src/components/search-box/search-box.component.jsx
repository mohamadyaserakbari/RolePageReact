import "../search-box/search-box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      placeholder={placeholder}
      className={`search-box ${className}`}
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
