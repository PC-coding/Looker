import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to='/'>
                    <img></img>
                </Link>
            </div>
            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage
