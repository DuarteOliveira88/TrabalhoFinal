import { useState, useEffect } from "react";

export default function API() {
  const [films, setFilms] = useState([]); 

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/films') 
      .then((response) => response.json())
      .then((resData) => setFilms(resData.results)) 
      .catch((error) => console.error('Error fetching data: ', error));
  }, []); 

  return (
    <div>
      <h1>Filmes Star Warr</h1>

      {films.length === 0 && <p className="noresult-text">A carregar...</p>}

      {films.length > 0 && (
        <ul className="film-list">
          {films.map((item, index) => ( 
            <li key={index} className="film-item">
              <p><b>{item.title}: </b>{item.release_date}</p>
              <p>{item.opening_crawl}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}