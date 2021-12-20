import React from 'react';

const SearchBar = ({item}) => {
  return(
    <form action="/" method="get" > 
        
        <input
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s"
             
        />
        <button type="submit" >Search</button>
    </form>
  )
};

export default SearchBar;