import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log('search button ??????')

        history.push('/search')
    };
    
    return (
        <div className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            <div className='search_buttons'>
                <Button onClick={search} variant='outlined'>Looker Search</Button>
                <Button variant='outlined'>I'm Feeling Fortunate</Button>
            </div>
        </div>
    )
}

export default Search;