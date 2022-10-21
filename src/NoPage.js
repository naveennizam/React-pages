// import React from "react";
// import { Link } from "react-router-dom";
import Card from './card'
import Data from './DataCard'



const NoPage = () => {

  <>
    <h1>There is Some thing</h1>


    {Data.map(function ncard(val) {
      return (
        <Card
          imag={val.imag}
          Sname={val.Sname}
          para={val.para}
          buttton={val.buttton}
        />
      )
    })}

  </>


};

export default NoPage;