import PropTypes from "prop-types";
import JokeList from "./JokeList";

export default function JokeVote({ handleClick, goodJokes, badJokes }) {
  return (
    <>
      <button onClick={(e) => handleClick(e)}>Good Joke</button>
      <JokeList Jokes={goodJokes} />
      <div></div>
      <button onClick={(e) => handleClick(e)}>Bad Joke</button>
      <JokeList Jokes={badJokes} />
    </>
  );
}

JokeVote.propTypes = {
  handleClick: PropTypes.func.isRequired,
  goodJokes: PropTypes.array.isRequired,
  badJokes: PropTypes.array.isRequired,
};
