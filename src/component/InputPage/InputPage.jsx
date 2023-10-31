/* eslint-disable react/prop-types */
import style from "./../InputPage/InputPage.module.css"
const InputPage = ({
  InputTxtHandler,
  cityvalue,
  apibtnhandler,
  getCurrentLocation,
  resethandler,
}) => {
  return (
    <>
      <div className={style.boxcss}>
        <input
          type="text"
          onChange={(e) => InputTxtHandler(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              apibtnhandler();
            }
          }}
          value={cityvalue}
          placeholder="Enter City Name.."
          id="city"
        />
        <button onClick={apibtnhandler}>Submit</button>
        <button style={{ marginLeft: "10px" }} onClick={getCurrentLocation}>
          Use Current Location
        </button>
        <button className={style.resetcss} onClick={resethandler}>
          Reset
        </button>
      </div>
    </>
  );
};
export default InputPage;