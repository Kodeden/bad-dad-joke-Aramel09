import { useState } from "react";

export default function useJoke() {
  const [jokes, setJokes] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  function handleClick(e) {
    if (e.target.textContent.includes("Good")) {
      setGoodJokes((prev) => [...prev, jokes]);
    } else if (e.target.textContent.includes("Bad")) {
      setBadJokes((prev) => [...prev, jokes]);
    }
    setJokes(null);
  }

  return [jokes, setJokes, goodJokes, handleClick, badJokes];
}
