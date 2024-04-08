import axios from "axios";
import React, { forwardRef, useImperativeHandle } from "react";

const CallApi = forwardRef(
  ({ city, setData, setError, data, setCity }, ref) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;

    const handleCity = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        let image = "";
        if (res.data.weather[0].main == "Clouds") {
          image = "./cloud.png";
        } else if (res.data.weather[0].main == "Clear") {
          image = "./clear.png";
        } else if (res.data.weather[0].main == "Rain") {
          image = "./rain.png";
        } else if (res.data.weather[0].main == "Drizzle") {
          image = "./drizzle.png";
        } else if (res.data.weather[0].main == "Mist") {
          image = "./mist.png";
        } else if (res.data.weather[0].main == "Haze") {
          image = "./clear.png";
        } else {
          image = "./clouds.png";
        }
        setData({
          ...data,
          temp: res.data.main.temp,
          name: res.data.name,
          condition: res.data.weather[0].main,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
          image: image,
        });
        setCity("");
        setError(null);
      } catch (error) {
        if (error !== null) {
          setError("Invalid City");
        } else {
          setError(null);
        }
      }
    };

    useImperativeHandle(ref, () => ({
      handleCity,
    }));

    return <div></div>;
  }
);
CallApi.displayName = "CallAPi";
export default CallApi;
