'use client'
import { useState } from 'react';
import { searchCharacters } from '../utils/api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  console.log(results)

  const handleSearch = async () => {
    if (query.trim() !== '') {
      try {
        const searchData = await searchCharacters(query);
        setResults(searchData.results);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Marvel Character Search</h1>
      <input
        type="text"
        placeholder="Search characters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="search-results">
        {results.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            {/* You can display more character information here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
