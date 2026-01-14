import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)  

  const fetchMovies = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=9aa57373'
      )
      const data = await response.json()

      if (data.Response === 'False') {
        throw new Error(data.Error)
      }

      setMovies(data.Search)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }

    useEffect(() => {
      fetchMovies()
    }, [])
    
  }
  return (
    <>
      
    </>
  )
}

export default App
