import { useEffect, useState } from 'react'
import './App.css'
import BookList from '@/components/BookList'
import ReadingBook from '@/components/ReadingBook'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
function Container({ children, title }) {
  console.log(children)
  return (
    <>
      <h3>{title}</h3>
      <div>{children}</div>
    </>
  )
}

function App() {
  const [readingBookTitle, setReadingBookTitle] = useState('')
  const [keyword, setKeyword] = useState('')

  useEffect(
    /*localStorage에서 읽고 있었던 책 가져오기 */ () => {
      setReadingBookTitle(localStorage.getItem('readingBookTitle'))
    },
    [],
  )

  return (
    <Layout>
      <Container title='나만의 책장'>
        <ReadingBook bookTitle={readingBookTitle} setKeyword={setKeyword} />
      </Container>
      <BookList setReadingBookTitle={setReadingBookTitle} keyword={keyword} />
      <Container title='만든이'>
        <Footer />
      </Container>
    </Layout>
  )
}

export default App
