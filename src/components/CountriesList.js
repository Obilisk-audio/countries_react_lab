import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {

    //WANT TO MAP EACH COUNTRY OBJECT TO AN INDEVIDUAL COUNTRY LIST ITEM
    //function 
    const countryListItems = countries.map((country)=>{
        return <CountryListItem
        country={country}
        />
    })

//now return method
    return(
        <ul>
            {countryListItems}
        </ul>
    );
}

export default CountriesList;