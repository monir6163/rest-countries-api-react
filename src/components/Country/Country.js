import React from "react";
import "./Country.css";

const Country = props => {
  const { name, capital, region, flag } = props.country;
  return (
    <div className="countryinfo">
      <h2>Country Name : {name}</h2>
      <h4>Capital : {capital}</h4>
      <h4>Region : {region}</h4>
      <img src={flag} alt={name} />
    </div>
  );
};

export default Country;
