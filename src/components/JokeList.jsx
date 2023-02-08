import PropTypes from "prop-types";

export default function JokeList({ jokes, tittle }) {
  return (
    <>
      <div className="flex flex-col p-2">
        <h2 className=" font-semibold">{tittle}</h2>

        <ul>
          {jokes.map((data) => (
            <li key={data.id}>
              {data.setup} - {data.punchline}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

JokeList.propTypes = {
  jokes: PropTypes.array.isRequired,
  tittle: PropTypes.string.isRequired,
};
