import React, { MouseEventHandler, useState } from "react";
import "./WeatherHeader.scss";

export const WeatherHeader: React.FC<{
  title: string;
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ title, handleButtonClick }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
    setSearchInput(target.value);
  };

  return (
    <div className="weather-header">
      <h1 className="weather-header__title">{title}</h1>
      <input
        className="weather-header__input"
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search a city"
      />
      <button className="header-header__button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};
