import moment from "moment";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap/";
import style from "../AppHeader/AppHeader.module.css"

const AppHeader = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    let timedis = `${moment().format("h:mm:ss a")}`;
    setCount(timedis);
  }, 1000);

  return (
    <header style={{ marginBottom: "10px" }}>
      <Navbar bg="primary" variant="dark" expand="sm" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="\weather-app.png"
              alt="headerimage"
              height="50px"
              width="50px"
            />
            <h3 style={{ display: "inline-block", marginLeft: "25px" }}>
              Weather Info App
            </h3>
          </Navbar.Brand>
          <Navbar>
            <div className={style.timebox}>
              <h6 style={{ color: "white" }}>
                Date: {moment().format("MMMM Do YYYY")}
              </h6>
              <h6 style={{ color: "white" }}>Time: {count}</h6>
            </div>
          </Navbar>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
