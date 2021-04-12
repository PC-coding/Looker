import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'

function Search() {
    return (
        <div className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input />
                <MicIcon />
            </div>
            <div className='search_buttons'>
                <Button>Looker Search</Button>
                <Button>I'm Feeling Fortunate</Button>
            </div>
        </div>
    )
}

export default Search;