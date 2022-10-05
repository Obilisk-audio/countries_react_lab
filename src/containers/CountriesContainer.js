import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {
        //state lives in container - countries state will hold all country data
        // once ive selected them, I want to move them to visited state      
        // both lists need props: countries & visited countries    
        
        //create empty countries list
    const [countries, setCountries] = useState([]);
        //create
     
    //fetch countries async await syntax data
    const fetchCountries = async () => {
        //pull data from api
        const response = await fetch ("https://restcountries.com/v3.1/all")
        //wait for json data and save to jsonCountries
        const jsonCountries = await response.json();
        
     //   set countreies to countries state usestate
        setCountries(jsonCountries);

    }

    //loads in countries, only when app is first loaded
    useEffect(() => {
        fetchCountries();
    }, [])

    const addVis

//pass down list of coutries
    return(
        <div id="main_container">
            <CountriesList countries={countries}/> 
            <VisitedCountriesList/>
        </>
    );
}

export default CountriesContainer;