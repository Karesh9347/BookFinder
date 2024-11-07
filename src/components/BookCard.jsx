import React from 'react';
import '../styles/bookCard.css'
import { useNavigate } from 'react-router-dom';


const BookCard = ({ book }) => {
    
 const navigate=useNavigate()
  const coverUrl =book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null; ;
  const authors = book.author_name ? book.author_name.join(', ') : 'Unknown';
  const getName=(title)=>{
    let s=title.split(" ")
    let name=""
    for(var word of s){
        name+=word[0]
    }
    return name

  }
  const redirect=()=>{
    localStorage.setItem("book",JSON.stringify(book))
    navigate('/book-details')

  }
  const alphabetColorMap = {
    'A': '#FF5733', // Red
    'B': '#33FF57', // Green
    'C': '#3357FF', // Blue
    'D': '#FF33A1', // Pink
    'E': '#FF8333', // Orange
    'F': '#33FFC4', // Teal
    'G': '#8A33FF', // Purple
    'H': '#FFC433', // Yellow
    'I': '#33FFFC', // Aqua
    'J': '#FF33B8', // Fuchsia
    'K': '#FF5733', // Red
    'L': '#33A1FF', // Sky Blue
    'M': '#FF337B', // Light Pink
    'N': '#A1FF33', // Light Green
    'O': '#FF8A33', // Light Orange
    'P': '#8A33FF', // Violet
    'Q': '#FF335E', // Coral
    'R': '#33FF6B', // Sea Green
    'S': '#FF33D4', // Hot Pink
    'T': '#33C4FF', // Light Blue
    'U': '#FF3366', // Pinkish Red
    'V': '#33FF5C', // Lime Green
    'W': '#FF5733', // Firebrick
    'X': '#4C33FF', // Indigo
    'Y': '#FF3333', // Red
    'Z': '#33FF33'  // Lime
  };
  const getColor=(head)=>{
    let bookName=getName(head)
    let firstLetter=bookName[0][0].toUpperCase()
    console.log(firstLetter)
    if(firstLetter in alphabetColorMap) return alphabetColorMap[firstLetter]
    return "pink"

  }
  
  

  return (
    <div  className='book-card' onClick={redirect}>
      {/* Book Cover */}
      <div style={{ marginRight: '20px' }} >
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={book.title.slice(100)}
            id="book-image"
          />
        ) : (
            <div style={{ width: "110%", height: '350px', backgroundColor: `${getColor(book.title)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>{getName(book.title)}</span>
          </div>
        )}
      </div>

      {/* Book Information */}
      <ul className='book-card-content'>
        <li><h4>{book.title.slice(0,100)}</h4></li>
        <li className='author'><strong>Author:</strong> {authors}</li>
        <li className='publisher'><strong>Publisher:</strong> {book.publisher ? book.publisher.join(', ') : 'N/A'.slice(100)}....</li>
        <li className='year'><strong>Year:</strong> {book.first_publish_year || 'N/A'}</li>
        <li><strong>Pages:</strong> {book.number_of_pages_median || 'N/A'}</li>
      </ul>
    </div>
  );
};

export default BookCard;
