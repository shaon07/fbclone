import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Custom = () => {
  const { tag } = useParams();
  return (
    <>
      <Header />
      <div className="flexItem" >
        <h1>This is {tag} Page</h1>
      </div>
    </>
  );
};

export default Custom;
