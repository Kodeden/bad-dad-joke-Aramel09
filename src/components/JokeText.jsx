import PropTypes from "prop-types";

export default function JokeText({ jokes }) {
  return (
    <>
      <p>{jokes.setup}</p>
      <p>{jokes.punchline}</p>
    </>
  );
}

JokeText.propTypes = {
  jokes: PropTypes.string.isRequired,
};
