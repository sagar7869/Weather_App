/* eslint-disable react/prop-types */
import moment from "moment/moment";
import style from "../WeatherCurrent/WeatherCurrent.module.css";
import Loader from "../spinner/Spinner";

const WeatherCurrent = ({ livedata, isloader, citydata }) => {
  return (
    <>
      {isloader ? (
        <Loader />
      ) : (
        <div className={style.weathercard}>
          {livedata && livedata.weather && citydata && citydata[0] ? (
            <>
              <div className={style.card1}>
                <p style={{ fontSize: "25px",textAlign:'center',marginRight:'35px' }}>
                  {`${livedata.name} (${citydata[0].state})`}
                </p>
                <p style={{ color: " rgb(197, 224, 248)", fontSize: "22px",textAlign:"center",marginRight:'35px' }}>
                  {moment().format("MMMM Do YYYY, dddd")}
                </p>

                <hr />
                <div className={style.combcss}>
                  <div className={style.tempcss}>
                    <p>Temperature</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: " rgb(197, 224, 248)",
                      }}
                    >
                      <i
                        className="bi bi-thermometer-sun"
                        style={{ fontSize: "1.2rem", color: "yellow" }}
                      ></i>
                      {Math.round(livedata.main.temp) - 273}°C
                    </p>
                  </div>

                  <div className={style.humcss}>
                    <p>Humidity</p>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        marginTop: "-4px",
                        color: "#A7CEF3",
                      }}
                    >
                      <img
                        src="/humidity.png"
                        alt="icon"
                        width="32px"
                        height="32px"
                      />
                      {livedata.main.humidity}%
                    </p>
                  </div>
                  <div className={style.windcss}>
                    <p>Wind</p>
                    <p style={{ color: "#A7CEF3" }}>
                      <i className="bi bi-tornado"></i> {livedata.wind.speed}{" "}
                      Km/h
                    </p>
                  </div>
                </div>
                <hr />
                <div className={style.combcss}>
                  <div className={style.precss}>
                    <p>Pressure</p>
                    <p className={style.imgbox}>
                      <img
                        src="\humidity.png"
                        alt="icon"
                        width="32px"
                        height="32px"
                      />
                      {livedata.main.pressure} hPa
                    </p>
                  </div>

                  <div className={style.visicss}>
                    <p>Visibility</p>
                    <p className={style.imgbox}>
                      <img
                        src="\witness (1).png"
                        alt="icon"
                        width="32px"
                        height="32px"
                      />
                      {livedata.visibility / 1000} Km
                    </p>
                  </div>
                </div>
              </div>

              {/* .......................................................... */}
              <div className={style.card2}>
                <p style={{ fontSize: "18px" }}>Weather Description</p>
                <img
                  src={`https://openweathermap.org/img/wn/${livedata.weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <p style={{ textAlign: "center", marginTop: "-12px" }}>
                  {livedata.weather[0].description}
                </p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};
export default WeatherCurrent;
