import React, { useEffect, useState } from "react";

// Debouncing is used for searchbar to put less load on DB less
function useDebounce(input, delay) {
  const [debounce, setDebounce] = useState(input);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounce(input);
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [input, delay]);

  return debounce;
}
const UseDebounce = () => {
  const [input, setInput] = useState("");
  const debouncevalue = useDebounce(input, 500);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          placeholder = "Search";
        }}
      />

      <h1>{debouncevalue}</h1>
    </div>
  );
};

export default UseDebounce;
