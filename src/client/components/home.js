import React from "react";

const Home = () => {

  const onClick = () => {
    console.log('hi there:)');
  }

  return (
    <div>
      <div>Im the BEST hello home element</div>
      <button onClick={onClick}>Press me!</button>
    </div>
  );
};

export default Home;
