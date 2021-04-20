import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import searchLogo from '../../../Looker_logo.png';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                    <div className='searchPage_options'>
                        <DescriptionIcon />
                        <Link to='/news'>News</Link>
                    </div>
                    <div className='searchPage_options'>
                        <ImageIcon />
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className='searchPage_options'>
                        <LocalOfferIcon />
                        <Link to='/shopping'>Shopping</Link>
                    </div>
                    <div className='searchPage_options'>
                        <RoomIcon />
                        <Link to='/maps'>Maps</Link>
                    </div>
                    <div className='searchPage_options'>
                        <MoreVertIcon />
                        <Link to='/more'>More</Link>
                    </div>
                </div>
            </div>

            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage
