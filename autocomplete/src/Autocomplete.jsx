import React from "react";
import { useState } from "react";

const Autocomplete = () => {
  const [inputVal,setInputVal] = useState(''); 
  const [suggestions,setSuggestions] = useState([]);

  const handleInput = (e) => {
    setInputVal(e.target.value);
    handleSuggestions();
  }


  const data = [
    'apple',
    'Mango',
    'Banana',
    'Orange',
    'Watermelon',
    'Grapes',
    'Guava',
    'cherry',
    'pineapple',
    'Strawberry',
    'Peach',
    'Papaya',
    'Lemon',
    'Kiwi',
    'Pomegranate',
    'Avocado',
    'Plum',
    'Apricot',
  ]

  const handleSuggestions = () => {
    if (inputVal.length > 0) {
      setSuggestions(data.filter((suggestions) =>  suggestions.includes(inputVal)));
    }else{
      setSuggestions([])
    }
  }


  return (
    <div>
      <input type="text" value={inputVal} onChange={handleInput} />
      {suggestions.length > 0 && (
        <ul>
          {suggestions?.map((suggestion) => (

            <li onClick={() =>setInputVal(suggestion)}>{suggestion}</li>

          ))}
  </ul>

  
      )}
    </div>
  )
  
}
export default Autocomplete;
