import Layout from '@/components/Layout'
import books from '@/mock/book.js'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { bookId } = useParams()

  const book = books.find((book) => book.id === JSON.parse(bookId))
  return (
    <Layout>
      <h3>{book.title}</h3>
      <ul style={{ listStyle: 'none' }}>
        <li>- 저자 : {book.author}</li>
        <li>- 출판 : {book.publisher}</li>
        <li>- 가격 : {book.price}</li>
      </ul>
    </Layout>
  )
}

export default BookDetails
