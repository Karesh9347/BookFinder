import React, { useEffect, useState } from 'react';
import '../styles/bookDetails.css';

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    let book = JSON.parse(localStorage.getItem("book"));
    setBookDetails(book);
  }, []);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const coverUrl = bookDetails.cover_i ? `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg` : null;
  const authors = bookDetails.author_name ? bookDetails.author_name.join(', ') : 'Unknown';

  const getName = (title) => {
    let s = title.split(" ");
    let name = "";
    for (var word of s) {
      name += word[0];
    }
    return name;
  };

  const alphabetColorMap = {
    'A': '#FF5733', 'B': '#33FF57', 'C': '#3357FF', 'D': '#FF33A1', 'E': '#FF8333', 'F': '#33FFC4',
    'G': '#8A33FF', 'H': '#FFC433', 'I': '#33FFFC', 'J': '#FF33B8', 'K': '#FF5733', 'L': '#33A1FF',
    'M': '#FF337B', 'N': '#A1FF33', 'O': '#FF8A33', 'P': '#8A33FF', 'Q': '#FF335E', 'R': '#33FF6B',
    'S': '#FF33D4', 'T': '#33C4FF', 'U': '#FF3366', 'V': '#33FF5C', 'W': '#FF5733', 'X': '#4C33FF',
    'Y': '#FF3333', 'Z': '#33FF33'
  };

  const getColor = (head) => {
    let bookName = getName(head);
    let firstLetter = bookName[0].toUpperCase();
    return alphabetColorMap[firstLetter] || "pink";
  };

  return (
    <div className="book-details-container">
      <div className="book-cover-container">
        {coverUrl ? (
          <img src={coverUrl} alt={bookDetails.title.slice(0, 100)} className="book-cover-image" />
        ) : (
          <div className="placeholder-cover" style={{ backgroundColor: getColor(bookDetails.title) }}>
            <span>{getName(bookDetails.title)}</span>
          </div>
        )}
      </div>

      <div className="book-information">
        <h4>{bookDetails.title}</h4>
        <ul>
          <li><strong>Author:</strong> {authors}</li>
          <li><strong>Publisher:</strong> {bookDetails.publisher ? bookDetails.publisher.join(', ') : 'N/A'}</li>
          <li><strong>Year:</strong> {bookDetails.first_publish_year || 'N/A'}</li>
          <li><strong>Pages:</strong> {bookDetails.number_of_pages_median || 'N/A'}</li>
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
