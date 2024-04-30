import React from "react";
import { useContext } from "react";
import UserContext from "../context";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>user is</h1>
      <h3>{user.name}</h3>
    </>
  );
};

export default Home;
