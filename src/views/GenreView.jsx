import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

function GenreView() {
  const { genreId } = useParams()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genreId}&page=${page}`)
      .then(res => setMovies(res.data.results))
  }, [genreId, page])

  return (
    <div>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  )
}

export default GenreView
