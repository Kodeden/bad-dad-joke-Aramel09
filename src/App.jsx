import JokeButton from "./components/JokeButton";
import JokeText from "./components/JokeText";
import JokeVote from "./components/JokeVote";
import useJoke from "./hooks/useJoke";

function App() {
  const [jokes, setJokes, goodJokes, handleClick, badJokes] = useJoke();

  return (
    <>
      <JokeButton setJokes={setJokes} />

      <JokeText jokes={jokes} />
      <JokeVote
        handleClick={handleClick}
        goodJokes={goodJokes}
        badJokes={badJokes}
      />
    </>
  );
}

export default App;
