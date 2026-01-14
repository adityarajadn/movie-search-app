import { useState } from 'react'
import './App.css'

import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const fetchMovies = async () => {
    if (!query.trim()) return
    
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=9aa57373`
      )
      const data = await response.json()

      if (data.Response === 'False') {
        throw new Error(data.Error)
      }

      setMovies(data.Search || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🎬 Movie Search</h1>
        <SearchBar 
          query={query} 
          setQuery={setQuery} 
          fetchMovies={fetchMovies}
        />

        {loading && <div className="loading">🔍 Searching...</div>}
        {error && <div className="error">❌ {error}</div>}

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
