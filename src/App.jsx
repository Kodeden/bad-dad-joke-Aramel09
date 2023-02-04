import { useState } from "react";

function App() {
  const [jokes, setJokes] = useState("");

  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  };

  const arrayGoodJokes = [];
  arrayGoodJokes.push(jokes);

  const arrayBadJokes = [];
  arrayBadJokes.push(jokes);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => fetchJokes()}>Joke</button>
      <p>{jokes.setup}</p>
      <p>{jokes.punchline}</p>
      {/* <ul>
        {arrayJokes.map((data) => (
          <li key={data.id}>
            {data.setup} - {data.punchline}
          </li>
        ))}
      </ul> */}
      <div></div>
      <button>Good Joke</button>
      <div></div>
      <button>Bad Joke</button>
    </>
  );
}

export default App;
