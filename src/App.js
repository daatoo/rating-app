import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import Rating from './components/Rating'
import Thank from './components/Thank'
function App() {

    const [rating, setRating] = useState()
    const [submit, setSubmit] = useState(false)
    return (
      <div>
      {!submit ? 
      <Rating rating={rating} setRating={setRating} setSubmit={setSubmit}/>
      : <Thank rating={rating} />
      }
      </div>
    );

}

export default App;
