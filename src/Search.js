import React from 'react';
function Search() {
    return (
        <div className="search_box">
            <form action>
                <input className="inputText" placeholder="Type in a city name" name="search" />
                <button className="submit_button">
                    FIND WEATHER
                </button>
            </form>
        </div>

    )
}
export default Search;
