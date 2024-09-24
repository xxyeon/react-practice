import books from '@/mock/book.js'
import { Link } from 'react-router-dom'

function BookList({ setReadingBookTitle, keyword }) {
  return (
    <>
      <ul>
        {books
          .filter((book) => book.title.includes(keyword))
          .map((book) => {
            return (
              <li style={{ listStyle: 'none' }} key={book.id}>
                <Link to={`/books/${book.id}`}>
                  {book.title} - {book.author}
                </Link>
                <button
                  style={{ padding: '0.2rem 0.4rem', marginLeft: 4 }}
                  onClick={() => {
                    localStorage.setItem('readingBookTitle', book.title)
                    setReadingBookTitle(book.title)
                  }}
                >
                  읽기
                </button>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default BookList
