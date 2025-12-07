import { useEffect, useState } from 'react';
import './App.css'
import { SearchInput } from './SearchInput'
import { SearchResult } from './SearchResult';

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "64405bd2";
const IMDB_ID = "tt0103064";

type MovieItem = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

type OmdbAPIResponse = {
  Search: MovieItem[],
  totalResults: string,
  Response: string,
  Error?: string,
}



const App = () => {
  const [value, setValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieItem[] | null>(null);

  const handleSearchChange = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    if (value.trim()) {
      const url = `${BASE_URL}?apikey=${API_KEY}&s=${value}`;

      fetch(url)
        .then((response) => response.json())
        .then((data: OmdbAPIResponse) => {
          if (data.Response === "False") {
            alert(data.Error);
            return;
          }
          setSearchResults(data.Search);
        })
        .catch((error) => {
          console.error('Ошибка:', error.message);
        });
    } else {
      setSearchResults(null);
    }
  }, [value]);



  return (
    <div className="app-container">
      <h1>Поисковая строка с задержкой ввода</h1>
      <SearchInput onChange={handleSearchChange} />
      {searchResults && searchResults.length > 0 ? (
        <SearchResult movies={searchResults} />
      ) : !searchResults ? (
        <></>
      ) : (
        <p>Нет результатов...</p>
      )}
    </div>
  );
};

export default App;