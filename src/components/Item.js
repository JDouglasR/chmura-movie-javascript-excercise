import { MdLocalMovies } from "react-icons/md";

const Item = ({ movie, actors }) => {
  return (
    <div className="item">
      <h3>
        <MdLocalMovies style={{ color: "steelblue", paddingTop: "6px" }} />
        {movie.title}
      </h3>
      {/* <h5 key={actor[0]}>{actor.title}</h5>
      <p key={movie[0]}>{movie.title}</p>
      <p key={movie[0]}>{movie.title}</p> */}
    </div>
  );
};

export default Item;
