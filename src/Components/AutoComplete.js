import { useState, useEffect, useRef } from "react";
import "./booksapi.css";
const AutoComplete = ({ options = [], setSelectedOptions }) => {
  const [searchField, setSearchField] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestions = options.filter((option) =>
    option.toLowerCase().includes(searchField.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [searchField]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    setSelectedOptions(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchField(suggestion);
    setSelectedOptions(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className='AutoComplete' ref={autocompleteRef}>
      <input
        className='inputfield'
        value={searchField}
        onChange={(e) => handleChange(e)}
        placeholder='Search'
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className='suggestions'>
          {suggestions.map((suggestion) => (
            <li
              onClick={() => handleSuggestionClick(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
