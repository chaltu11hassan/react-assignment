import React from 'react';

const createTable = () => {
    return(
        <React.Fragment>
            <div>
                Store Name:
                <input type="text"></input>
            </div>
            <table>
                <tr>
                    <th>Day of Week</th>
                    <th>Open</th>
                    <th>Close</th>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Monday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Friday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <th><input type="time"></input></th>
                    <th><input type="time"></input></th>
                </tr>
            </table>
        </React.Fragment>
    );
};

export default createTable;