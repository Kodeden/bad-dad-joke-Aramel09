function App() {
  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  fetchJokes();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => fetchJokes()}>Joke</button>
      <div></div>
      <button>Good Joke</button>
      <div></div>
      <button>Bad Joke</button>
    </>
  );
}

export default App;
