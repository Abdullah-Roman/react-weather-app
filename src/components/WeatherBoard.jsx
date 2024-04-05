import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Sea from "../assets/beach2.jpg";
const WeatherBoard = ({ data, city, setCity, handleSubmit, error }) => {
  const bg = {
    backgroundImage: `url(${Sea})`,
    bacgroundSize: "cover",
    bacgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    width: "100%",
  };

  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();

    // Format current day
    const optionsDay = { weekday: "long" };
    setCurrentDay(date.toLocaleDateString(undefined, optionsDay));

    // Format current date
    const optionsDate = { year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(date.toLocaleDateString(undefined, optionsDate));
  }, []);

  return (
    <div className="shadow w-screen h-screen relative">
      <div
        style={bg}
        className="max-w-[600px] mx-auto relative top-8 rounded-md"
      >
        <div className="flex justify-center pt-12">
          <div>
            <h2 className="text-white font-bold text-2xl">{currentDay}</h2>
            <h2 className="text-white font-bold text-2xl">{currentDate}</h2>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className=" border-2 placeholder:text-white border-white focus:border-none rounded-full px-3 py-2 bg-transparent"
              placeholder="Enter City Name"
            />

            <button
              type="submit"
              className="border-2 border-white p-3 inline-block ml-2 rounded-full"
            >
              <FaSearch className="text-white" />
            </button>
            {error !== "" ? (
              <p className="text-white font-semibold text-center pt-3">
                {error}
              </p>
            ) : (
              ""
            )}
          </form>
        </div>

        {data ? (
          <div>
            <div className="grid place-items-center pb-5">
              <img src={data.image} alt="" />
              <div className="flex items-center gap-x-2">
                <span>
                  <FaLocationDot className="text-white text-2xl" />
                </span>
                <h2 className="text-white text-2xl font-bold">{data.name}</h2>
              </div>

              <h2 className="text-white text-2xl font-bold ml-6">
                {Math.round(data.temp)}°C
              </h2>
              <h2 className="text-white text-2xl font-bold ml-4">
                {data.condition}
              </h2>
            </div>
            <div className="flex justify-around pt-3 pb-10">
              <div className="flex gap-x-2">
                <img src="./humidity.png" alt="" />
                <div>
                  <p className="text-white text-2xl font-bold">
                    {data.humidity}%
                  </p>
                  <p className="text-white text-2xl font-bold">Humidity</p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <img src="./wind.png" alt="" />
                <div>
                  <p className="text-white text-2xl font-bold">
                    {data.speed} km/h
                  </p>
                  <p className="text-white text-2xl font-bold">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default WeatherBoard;
