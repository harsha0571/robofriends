import React from 'react';

const SearchBar = ({ searchField, searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa4 ba b--green bg-lightest-blue' type='search'
                placeholder='search friends from database'
                onChange={searchChange} />
        </div>
    );
}
export default SearchBar;