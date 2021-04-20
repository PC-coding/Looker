import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import searchLogo from '../../../Looker_logo.png';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img className='searchPageLogo' src={searchLogo} alt='' />
                </Link>
            
                <div className='searchPage_headerBody'>
                    <Search hideButtons />  
                    <div className='searchPage_options'>
                        <SearchIcon />
                        <Link to='/all'>All</Link>
                    </div>
                </div>
            </div>

            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage
