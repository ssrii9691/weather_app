import React, { useEffect, useState } from "react";
import "./css/style.css";

const Temp = () => {
  const [city, setcity] = useState(null);
  const [search, setserach] = useState("mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4b7490741ee9d8c966e132e0ddf050c9`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setserach(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h2 className="temp">{city.temp} cel</h2>
              <h3 className="tempmin_max"> Min:{city.temp_min}cel | max:{city.temp_min}cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Temp;
