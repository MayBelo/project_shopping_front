import React, { useState } from 'react';
import axios from 'axios';
import Search from "./Search"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';




function SearchButton({addToCart}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    let navigate = useNavigate();
    
      
      
    
    const handleSearch = () => {
        axios.get(`http://localhost:8000/search/?q=${query}`).then(response => {
            setResults(response.data);
            navigate('/search');

        });
    }

    return (
        <div class="topnav">
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <Button variant="primary" size="lg" onClick={handleSearch}>search</Button>
            {results.map(result => <Search key={result.id} result={result} addToCart={addToCart}/>      
        )}
        </div>
    );
}

export default SearchButton;
