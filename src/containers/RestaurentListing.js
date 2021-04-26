import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import RestaurentComponent from './RestaurentComponent';
import {setRestaurents} from '../redux/actions/restaurentActions';
//import SearchComponent from './SearchComponent';


const RestaurentListing = () => {
   
    const restaurents = useSelector((state) => state);
    const dispatch = useDispatch();
   
   
    const fetchRestaurents = async () => {
        
        const response = await axios
            .get("/breweries")
            .catch((error)=> {
            console.log("Error ",error);
        });
        //console.log(response.data);
        dispatch(setRestaurents(response.data));
    };

    useEffect(() => {
        fetchRestaurents();
    }, []);

    console.log("Restaurents List",restaurents);

    return (
        <div className="ui container">
            <h2>Restaurent Listing</h2>
            { /*<div className="ui action input">
                <input type="text"  onChange={(event) => fetchRestaurents(event.target.value)} placeholder="Search..."/>
                <button className="ui icon button" >
                <i className="search icon"></i>
                </button>
    </div> */ }
            { /* <SearchComponent /> */}
            <RestaurentComponent /> 
        </div>
    );
};

export default RestaurentListing;