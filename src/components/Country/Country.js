import React from 'react'
import "./Country.css"

const Country = (props) => {
    // console.log(props.country)
    const {flags,population,area,name}=props.country
    return (
        
            <div className="country">
                <img src={flags.png} alt="flags"></img>
                <h2>Country Name:{name.common}</h2> 
                <p>Country Population: {population}</p>
                <p><small>Country Population: {area}</small> </p>
                
            </div>
        
       
    )
}

export default Country