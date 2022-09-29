import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Nairobi</h1>
      <ul>
        <li>Wednesday 15:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          23•C
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
