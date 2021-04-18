import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import searchLogo from '../../../Looker_logo.png';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to='/search'>
                    <img src={searchLogo} alt='' />
                </Link>
            </div>
            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage
