import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios';

function Home() {

    useEffect(() => {
        axios.get('/index')
        .then(resp => {
            alert('Got response')
        })
      }, [])

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Book Store
      </header>
    </div>
  );
}

export default Home;
