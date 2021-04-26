import React from 'react';
//import {searchRestaurent} from "../redux/actions/restaurentActions";

const SearchComponent = (props) => {
    //console.log("props", props);
    /*
    onSerch = e => {
      this.props.searchRestaurent(e.target.value);
    }
    */

    return (
      <>
       
      <form>
        <input
          placeholder="Search for..."
          onChange={(event)=>props.searchRestaurent(event.target.value)}
        />
      </form>
      </>
    )}

export default SearchComponent;