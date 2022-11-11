import './App.css'
import React, { useState } from 'react'
import { useGetSynonyms } from './hooks/useGetSynonyms';



function App() {
  const [word, setWord] = useState("");
  const {isLoading, synonyms, getSynonyms} = useGetSynonyms();
  

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();    
    getSynonyms(word);
  };

  const handleSynonymClick = (newWord: string) => {
    setWord(newWord);
    getSynonyms(newWord);
  };

  return (
    <div className="App">
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your word</label>
        <input id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)} >
        </input>
        <button>Submit</button>
      </form>

      {/* Results List */}
      {isLoading ? ( <div>Loading...</div> ) : (
        <ul>
          {synonyms.map((synonym) => 
            <li onClick={() => handleSynonymClick(synonym.word)} key={synonym.word}>{synonym.word}</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default App
