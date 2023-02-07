import PropTypes from "prop-types";

export default function JokeList({ Jokes }) {
  return (
    <>
      <ul>
        {Jokes.map((data) => (
          <li key={data.id}>
            {data.setup} - {data.punchline}
          </li>
        ))}
      </ul>
    </>
  );
}

JokeList.propTypes = {
  Jokes: PropTypes.array.isRequired,
};
