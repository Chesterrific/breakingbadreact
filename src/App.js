import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header></Header>
      <Search
        getQuery={(q) => { setQuery(q) }}
      ></Search>
      <CharacterGrid
        items={items}
        isLoading={isLoading}
      ></CharacterGrid>
    </div>
  );
}

export default App;
