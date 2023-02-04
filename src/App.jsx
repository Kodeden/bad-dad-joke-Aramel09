import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState("");
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  };

  function handleClickGJ() {
    setGoodJokes((prev) => [...prev, jokes]);
  }

  function handleClickBJ() {
    setBadJokes((prev) => [...prev, jokes]);
  }

  const arrayBadJokes = [];
  arrayBadJokes.push(jokes);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => fetchJokes()}>Joke</button>
      <p>{jokes.setup}</p>
      <p>{jokes.punchline}</p>

      <div></div>
      <button onClick={() => handleClickGJ()}>Good Joke</button>
      <div>
        <ul>
          {goodJokes.map((data) => (
            <li key={data.id}>
              {data.setup} - {data.punchline}
            </li>
          ))}
        </ul>
      </div>
      <div></div>
      <button onClick={() => handleClickBJ()}>Bad Joke</button>
      <div>
        <ul>
          {badJokes.map((data) => (
            <li key={data.id}>
              {data.setup} - {data.punchline}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
