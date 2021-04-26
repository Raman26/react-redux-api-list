import React from 'react';
import { useSelector } from 'react-redux';

const RestaurentComponent = () => {
    const restaurents = useSelector((state) => state.allRestaurents.restaurents);
    
    const renderList = restaurents.map((restaurent)=> {
        const { id, name, country, brewery_type, city, state} = restaurent;
        return (
                <tr key={id} >
                    <td>{name}</td>
                    <td>{city} , {state} , {country}</td>
                    <td>{brewery_type}</td>
                </tr>
        );
    });

    return (
        <div>
             <div>
                <table id="restaurestID" className="ui celled table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Brewery Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderList } 
                    </tbody>
                </table>
            </div>
            </div>
    );
};

export default RestaurentComponent;