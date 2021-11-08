export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.results.length > 0 ? (
        reviews.results.map((r) => (
          <li key={r.id}>
            <h3>Author: {r.author}</h3>
            <p>{r.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movies</p>
      )}
    </ul>
  )
}
