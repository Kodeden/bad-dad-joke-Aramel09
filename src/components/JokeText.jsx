import PropTypes from "prop-types";
import JokeVote from "./JokeVote";

export default function JokeText({ jokes, handleClick, goodJokes, badJokes }) {
  if (jokes) {
    return (
      <>
        <p className=" mt-3 font-semibold">{jokes?.setup}</p>
        <p>{jokes?.punchline}</p>

        <JokeVote
          handleClick={handleClick}
          goodJokes={goodJokes}
          badJokes={badJokes}
        />
      </>
    );
  }
}

JokeText.propTypes = {
  jokes: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
  goodJokes: PropTypes.array.isRequired,
  badJokes: PropTypes.array.isRequired,
};
