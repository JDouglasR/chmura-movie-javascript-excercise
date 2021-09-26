import Item from "./Item";

const List = ({ movies, actors }) => {
  return (
    <>
      {movies.map((movie) => (
        <Item key={movie.movieId} movie={movie} actors={actors} />
      ))}
    </>
  );
};

export default List;
