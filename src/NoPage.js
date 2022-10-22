// import React from "react";
// import { Link } from "react-router-dom";
import Card from './card'
import Data from './DataCard'


function ncard(val) {
  return (

    <Card
      pic={val.imag}
      naam={val.Sname}
      paragraph={val.para}
      press={val.buttton}
    />
  );

}
const NoPage = () => {
  return (
    <>
      <h1>There is Some thing</h1>


      {/* <Card
        imag='https://www.1training.org/wp-content/uploads/2017/10/6.png'
        Sname='Real'
        para='Some cdsjcdkjc'
        buttton='Go where'
      />

      <Card
        imag={Data[0].imag}
        Sname={Data[1].Sname}
        para={Data[0].para}
        buttton={Data[0].buttton}
      /> */}
      {Data.map(function ncard(val) {

        return (
          <Card
            pic={val.imag}
            naam={val.Sname}
            paragraph={val.para}
            press={val.buttton}
          />
        );
      })}
      {Data.map(ncard)};

    </>
  );


};

export default NoPage;