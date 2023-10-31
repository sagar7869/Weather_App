import Spinner from "react-bootstrap/Spinner";
import style from "../spinner/spinner.module.css";

function Loader() {
  return (
    <>
      <div className={style.spinnerbox}>
        <Spinner
          animation="border"
          variant="success"
          className={style.spinncss}
        />
        <h3>Loading........</h3>
      </div>
    </>
  );
}

export default Loader;
