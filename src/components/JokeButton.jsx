import PropTypes from "prop-types";

export default function JokeButton({ setJokes }) {
  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  };
  return (
    <>
      <button
        className=" rounded bg-sky-500 px-3 py-1 text-white"
        onClick={() => fetchJokes()}
      >
        Get Joke
      </button>
    </>
  );
}

JokeButton.propTypes = {
  setJokes: PropTypes.func.isRequired,
};
