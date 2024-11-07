import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Home';
import BookDetails from './BookDetails';


function Urls() {
  return (
    <Router> {/* Wrap the app with Router */}
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="book-details" element={<BookDetails/>}/>
      </Routes>
    </Router>
  );
}

export default Urls;
