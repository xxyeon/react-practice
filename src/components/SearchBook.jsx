function SearchBook({ setKeyword }) {
  return (
    <input
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setKeyword(e.currentTarget.value)
        }
      }}
    />
  )
}

export default SearchBook
