import { Link } from 'react-router-dom'

export default function MoviesList({ movies, location, label }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: { location, label },
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
