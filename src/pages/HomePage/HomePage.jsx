import { useState } from "react";
import InputPage from "../../component/InputPage/InputPage";
import WeatherCurrent from "../../component/WeatherCurrent/WeatherCurrent";
import AppHeader from "../../component/AppHeader/AppHeader";
import AppFooter from "../../component/AppFooter/AppFooter";

const HomePage = () => {
  const [citytxt, setCitytxt] = useState("");
  const [citydata] = useState(
    localStorage.getItem("citydata")
      ? JSON.parse(localStorage.getItem("citydata"))
      : []
  );
  const [livedata, setLivedata] = useState([]);
  const [isloader, setIsloader] = useState(false);

  function getCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setIsloader(true);
        setTimeout(() => {
          const apiKey = "9e64a79cc9f0b5789db8a940b6445e0f";
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          )
            .then((res) => res.json())
            .then((data) => {
              setLivedata(data);
              fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${data.name}&appid=${apiKey}`
              )
                .then((res) => res.json())
                .then((data) => {
                  localStorage.setItem("citydata", JSON.stringify(data));
                });
            });
          setIsloader(false);
        }, 2000);
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  }

  const InputTxtHandler = (values) => {
    setCitytxt(values);
  };
  const resethandler=()=>{
    setCitytxt('')
    setIsloader(false)
    setLivedata('')
  }

  const apibtnhandler = () => {
    if (citytxt.trim().length <= 0) {
      setIsloader(true);
      alert("Please Enter City Name");
      setIsloader(false);
    } else {
      setIsloader(true);
      setTimeout(() => {
        const apiKey = "a200d0f62eab190494b10446c9cc1f6b";
        fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${citytxt}&appid=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("citydata", JSON.stringify(data));
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`
            )
              .then((res) => res.json())
              .then((data) => setLivedata(data));
          });

        setCitytxt("");
        setIsloader(false);
      }, 2000);
    }
  };

  return (
    <>
      <AppHeader />
      <InputPage
        InputTxtHandler={InputTxtHandler}
        cityvalue={citytxt}
        apibtnhandler={apibtnhandler}
        getCurrentLocation={getCurrentLocation}
        resethandler={resethandler}
      />
      <WeatherCurrent
        livedata={livedata}
        isloader={isloader}
        citydata={citydata}
      />
      <AppFooter />
    </>
  );
};
export default HomePage;
