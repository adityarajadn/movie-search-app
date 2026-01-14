import './MovieCard.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250x350?text=No+Poster'} 
                alt={movie.Title}
            />
            <div className="movie-card-content">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default MovieCard