import SearchBook from '@/components/SearchBook'

function ReadingBook({ bookTitle, setKeyword }) {
  return (
    <>
      <div>현재 읽고있는 책 : {bookTitle}</div>
      <SearchBook setKeyword={setKeyword} />
    </>
  )
}

export default ReadingBook
