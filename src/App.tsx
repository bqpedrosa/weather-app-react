import React from "react";

import { WeatherHeader } from "./components/WeatherHeader/WeatherHeader";

const App: React.FC = () => {
  const handleButtonClick = () => {
    console.log("clicked");
  };

  return (
    <div className="App">
      <WeatherHeader
        title="Weather App"
        handleButtonClick={handleButtonClick}
      />
      text
    </div>
  );
};

export default App;
