import List from './List';


const Body = ({ movies, actors }) => {
  return <div>
      <h3 style={{paddingBottom: '10px'}}>This is a list of actors who have been in movies with both Keanu Reeves and Nicolas Cage:</h3>
      <List movies={movies} actors={actors}/>
  </div>;
};

export default Body;
