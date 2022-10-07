import React from 'react';
import classes from "./search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={classes.root}>
            <svg className={classes.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/>
                <g id="search">
                    <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"/>
                </g></svg>
            <input
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={classes.input}
                placeholder="Поиск пицц..."/>
            {searchValue && (<svg className={classes.closeIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
            </svg>)}
        </div>

    );
};

export default Search;