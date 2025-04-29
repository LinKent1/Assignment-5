import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function DetailView() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then(res => setMovie(res.data))
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then(res => {
        const t = res.data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube')
        setTrailer(t)
      })
  }, [movieId])

  if (!movie) return <div>Loading...</div>

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <ul>
        <li>Release Date: {movie.release_date}</li>
        <li>Runtime: {movie.runtime} min</li>
        <li>Rating: {movie.vote_average}</li>
        <li>Genres: {movie.genres.map(g => g.name).join(', ')}</li>
        <li>Overview: {movie.overview}</li>
        <li>Budget: ${movie.budget}</li>
        <li>Revenue: ${movie.revenue}</li>
      </ul>
      {trailer && (
        <div className="trailer">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default DetailView
