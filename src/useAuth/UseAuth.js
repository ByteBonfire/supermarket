import React from "react";
import { useContext } from "react";
import AuthContext from "../authProvider/AuthProvider";

const UseAuth = () => {
  return <div>{useContext(AuthContext)}</div>;
};

export default UseAuth;
