import { useEffect, useState } from "react";

const Tempapp = () => {
  const [search, setSearch] = useState("pune");
  const [city, setCity] = useState(null);
  console.log(city)  

  useEffect(() => {
    async function name() {
      const url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a74550c8cd98e97dc0b2a65454e55cfc`
      );
      const response = await url.json();
      setCity(response.main);
    }
    name();
  },[search]);

  return (
    <>
      <div>
        <div className="searchcCity">
          <input
            type="search"
            onChange={(event) => {setSearch(event.target.value)}}
          />
        </div>
        {/* <div className="info">
            <h2 className="location">{search}</h2>
            <h1 className="temp">{city}</h1>
          </div> */}      
      {!city ? (
        <p>data not found</p>
      ) : (
        <>
          <div className="info">
            <h2 className="location">{search}</h2>
            <h1 className="temp">{city.temp}</h1>
          </div>
        </>
      )}
      </div>
    </>
  );
};

export default Tempapp;
