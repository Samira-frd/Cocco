import "./SearchBox.css";
import React from 'react';
import {ReactComponent as SearchIcon} from './../../Assets/Icons/search.svg';

function SearchBox() {
  return (
    <div>
      <div className="iputContainer">
        <input type="text" placeholder="Search..." className="searchInput" />
      </div>
      <button type="button" className="btnSearch">
        <SearchIcon fill='white' style={{transform: 'scaleX(-1)'}}/>
      </button>
    </div>
  );
}

export default SearchBox;
