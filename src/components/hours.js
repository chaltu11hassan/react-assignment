import React from "react";
import "./hours.css";

const Hours = () => {
  return (
    <div className="table">
      <h1 className="h1">Hours of Operation</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Open</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>8:00 AM</td>
            <td>8:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>8:00 AM</td>
            <td>6:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>8:00 AM</td>
            <td>8:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>8:00 AM</td>
            <td>8:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>8:00 AM</td>
            <td>8:00 PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hours;
