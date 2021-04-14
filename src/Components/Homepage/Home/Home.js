import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../SearchEngine/Search';
import logo from '../../../Looker_logo.png';

function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home_headerRight'>
                    <Link to='/gmail'>Lmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='home_body'>
                <img src={logo} />
                <div className='home_inputContainer'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
