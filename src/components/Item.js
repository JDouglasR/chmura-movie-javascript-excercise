import { MdLocalMovies } from "react-icons/md";

const Item = ({ movie, movies, actors, actor }) => {
  return (
    <div className="item">
      <h3>
        <MdLocalMovies
          style={{
            color: "steelblue",
            paddingTop: "6px",
            marginRight: "5px",
          }}
        />
        {actor ? actor.name : movie.title}
      </h3>
    </div>
  );
};

export default Item;
