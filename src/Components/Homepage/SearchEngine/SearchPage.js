import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../StateProvider';
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <p>{term}</p>
            </div>
            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage
