import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import JokeText from "./components/JokeText";
import useJoke from "./hooks/useJoke";

function App() {
  const [jokes, setJokes, goodJokes, handleClick, badJokes] = useJoke();

  return (
    <main className=" flex h-screen flex-col items-center justify-center">
      <div className="mb-20 flex flex-col items-center">
        <JokeButton setJokes={setJokes} />

        <JokeText
          jokes={jokes}
          handleClick={handleClick}
          goodJokes={goodJokes}
          badJokes={badJokes}
        />
      </div>
      <section className="flex gap-10 ">
        <JokeList jokes={goodJokes} tittle="Good Joke" />
        <JokeList jokes={badJokes} tittle="Bad Joke" />
      </section>
    </main>
  );
}

export default App;
