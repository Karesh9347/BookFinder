import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import '../styles/home.css'

const Home= () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('full stack');
  const [loading, setLoading] = useState(true);
useEffect(()=>{
  fetchBooks()
},[])
  const fetchBooks = async () => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchQuery}`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  return (
    <div className="home-page">
      <h1>Book Search Application</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for books by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Loading or Results */}
      {loading && <p className="loading-message">Loading...</p>}
      {!loading && books.length === 0 && <p className="no-results">No results found</p>}

      {/* Search Results */}
      <SearchResults books={books} />
    </div>
  );
};

export default Home;
