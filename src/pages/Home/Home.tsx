import React from "react";
import Map from "../Maps";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/practicalChallace">
        <p style={{ fontSize: "20px", textDecoration: "none" }}>
          Practical challence
        </p>
      </Link>
      <Link to="/theoricalChallace">
        <p style={{ fontSize: "20px", textDecoration: "none" }}>
          Theorical challence
        </p>
      </Link>
    </>
  );
}
export default Home;
