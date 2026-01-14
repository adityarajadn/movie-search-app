import Button from "./Button";
import './SearchBar.css';

function SearchBar({ query, setQuery, fetchMovies }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies();
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..." 
            />
            <Button fetchMovies={fetchMovies} />
        </form>
    )
}

export default SearchBar;