import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState("");
  const [goodJokes, setGoodJokes] = useState("");
  const [badJokes, setBadJokes] = useState("");
  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  };

  function handleClickGJ() {
    const arrayGoodJokes = [];
    arrayGoodJokes.push(jokes);
    setGoodJokes(
      <ul>
        {arrayGoodJokes.map((data) => (
          <li key={data.id}>
            {data.setup} - {data.punchline}
          </li>
        ))}
      </ul>
    );
  }

  function handleClickBJ() {
    const arrayBadJokes = [];
    arrayBadJokes.push(jokes);
    setBadJokes(
      <ul>
        {arrayBadJokes.map((data) => (
          <li key={data.id}>
            {data.setup} - {data.punchline}
          </li>
        ))}
      </ul>
    );
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
      <div>{goodJokes}</div>
      <div></div>
      <button onClick={() => handleClickBJ()}>Bad Joke</button>
      <div>{badJokes}</div>
    </>
  );
}

export default App;
