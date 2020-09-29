import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";
import requests from "./requests";
import Nav from "./Nav";
// test

function App() {
  return (
    <div className="App">
      {/* 
      Navbar
      Banner
       */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
