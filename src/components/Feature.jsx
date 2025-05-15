import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Feature() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then(res => {
        const shuffledMovies = shuffleArray(res.data.results);
        setMovies(shuffledMovies.slice(0, 3)); 
      })
  }, [])

  return (
    <section className="feature">
      <h2>Now Playing</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Feature
