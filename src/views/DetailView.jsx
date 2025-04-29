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

  if (!movie) return <div className="loading">Loading...</div>

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-detail-info">
        <ul>
          <li>
            <strong>Release Date</strong>
            <span>{movie.release_date}</span>
          </li>
          <li>
            <strong>Runtime</strong>
            <span>{movie.runtime} minutes</span>
          </li>
          <li>
            <strong>Rating</strong>
            <span>{movie.vote_average.toFixed(1)} / 10</span>
          </li>
          <li>
            <strong>Genres</strong>
            <span>{movie.genres.map(g => g.name).join(', ')}</span>
          </li>
          <li>
            <strong>Overview</strong>
            <span>{movie.overview}</span>
          </li>
          <li>
            <strong>Budget</strong>
            <span>${movie.budget.toLocaleString()}</span>
          </li>
          <li>
            <strong>Revenue</strong>
            <span>${movie.revenue.toLocaleString()}</span>
          </li>
        </ul>
      </div>
      {trailer && (
        <div className="trailer">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
}

export default DetailView
