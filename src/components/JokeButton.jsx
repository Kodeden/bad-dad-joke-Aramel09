import PropTypes from "prop-types";

export default function JokeButton({ setJokes }) {
  const fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJokes(data));
  };
  return (
    <>
      <button onClick={() => fetchJokes()}>Joke</button>
    </>
  );
}

JokeButton.propTypes = {
  setJokes: PropTypes.func.isRequired,
};
