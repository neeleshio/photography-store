import React from 'react';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './styles.scss'

const Searchbar = () => {

    return (
        <div className='topnav'>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search here.." name="search" />
                    <div className="search_icon">
                        <SearchRoundedIcon />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Searchbar