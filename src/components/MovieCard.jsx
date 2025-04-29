import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <Link to={`/movies/details/${movie.id}`}>Details</Link>
    </div>
  )
}

export default MovieCard
