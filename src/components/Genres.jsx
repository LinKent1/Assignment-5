import { Link } from 'react-router-dom'

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 80, name: 'Crime' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 878, name: 'Sci-Fi' },
  { id: 10752, name: 'War' }
]

function Genres() {
  return (
    <div className="genres-grid">
      {genres.map(genre => (
        <Link key={genre.id} to={`/movies/genre/${genre.id}`} className="genre-card">
          {genre.name}
        </Link>
      ))}
    </div>
  )
}

export default Genres
