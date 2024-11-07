import React from 'react';
import BookCard from './BookCard';
import '../styles/searchReults.css'
const SearchResults = ({ books }) => {
  return (
    <div className='search-results'>
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default SearchResults;
