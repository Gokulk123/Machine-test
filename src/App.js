import React, { useState } from "react";
import { Select } from "antd";
import "./css/dropdown.css";
import DisplayName from "./components/DisplayName";
function App() {
  const [cities, setCities] = useState([]);
  const [selectedCounty, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = {
    IN: ["KA", "KL", "TN", "MH"],
    US: ["AL", "DE", "GA"],
    CA: ["ON", "QC", "BC"],
  };

  const countryList = Object.keys(countries).map((key) => ({
    name: key,
  }));

  function handleCountrySelect(value) {
    console.log("Selected country", value);
    const countrySel = value;
    const citiesSel = countrySel !== "" ? countries[countrySel] : "";
    setSelectedCountry(countrySel);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleCitySelect(value) {
    console.log("Selected city", value);
    const citiesSel = value;
    setSelectedCity(citiesSel);
  }
  const { Option } = Select;

  const component_name = "Display Name";

  const property = {
    firstName: "Gokul",
    secondName: "Krishnan",
    prefix: "Mr.",
    suffix: "G",
  };

  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">More Actions</button>
        <div className="dropdown-content">
          <p>View</p>
          <p>Edit</p>
          <p>Send</p>
          <p className="delete">Delete</p>
        </div>
      </div>
      <br />
      <Select
        className="selectDetails"
        placeholder="choose country"
        name="Countries"
        onChange={(e) => handleCountrySelect(e)}
        value={selectedCounty}
      >
        <option value="">Select the country</option>
        {countryList.map((country, key) => (
          <option key={key} value={country.name}>
            {country.name}
          </option>
        ))}
      </Select>
      <span>
        <Select
          className="selectDetails"
          placeholder="choose state"
          name="Cities"
          onChange={(e) => handleCitySelect(e)}
          value={selectedCity}
        >
          <option value="">Select the State</option>
          {cities.map((city, key) => (
            <option key={key} value={city}>
              {city}
            </option>
          ))}
        </Select>
      </span>
      <br />
      <DisplayName component_name={component_name} property={property} />
    </>
  );
}

export default App;
