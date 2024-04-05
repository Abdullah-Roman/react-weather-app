import React, { useRef, useState } from "react";
import CallApi from "./components/CallApi";
import WeatherBoard from "./components/WeatherBoard";

const App = () => {
  const [data, setData] = useState({
    temp: 11,
    name: "London",
    condition: "Cloudy",
    humidity: 89,
    speed: 16,
    image: "./clear.png",
  });

  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const childRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    childRef.current.handleCity();
  };

  return (
    <>
      <CallApi
        setData={setData}
        city={city}
        setError={setError}
        data={data}
        ref={childRef}
        setCity={setCity}
      />
      <WeatherBoard
        data={data}
        city={city}
        setCity={setCity}
        handleSubmit={handleSubmit}
        error={error}
      />
    </>
  );
};

export default App;
