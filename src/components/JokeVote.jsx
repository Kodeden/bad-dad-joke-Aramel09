import PropTypes from "prop-types";

export default function JokeVote({ handleClick, goodJokes, badJokes }) {
  return (
    <>
      <div className="mt-5 flex gap-x-10">
        <button
          onClick={(e) => handleClick(e)}
          className=" mb-2 text-3xl font-semibold"
        >
          👍🏽
        </button>

        <button
          onClick={(e) => handleClick(e)}
          className="mb-2 text-3xl font-semibold"
        >
          👎🏽
        </button>
      </div>
    </>
  );
}

JokeVote.propTypes = {
  handleClick: PropTypes.func.isRequired,
  goodJokes: PropTypes.array.isRequired,
  badJokes: PropTypes.array.isRequired,
};
