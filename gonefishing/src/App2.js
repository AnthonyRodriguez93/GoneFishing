import React, { Component } from 'react';


class App2 extends Component {


    state = {
        loading: true,
        weather: null,
    };


async componentDidMount() {
    const url = 'https://api.stormglass.io/v2/weather/point?lat=29.05878804877405&lng=-95.19013748885546&params=waveHeight,airTemperature,pressure,waterTemperature,humidity';
    let auth =  new Headers();
    auth.append("Authorization", "d5d4d330-abea-11eb-9f40-0242ac130002-d5d4d3d0-abea-11eb-9f40-0242ac130002");

    const requestOptions = {
        method: 'GET',
        headers: auth,
        redirect: 'follow'
    }
    
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    this.setState({ weather: data.hours[0], loading: false });
    console.log({weather: data.hours[0]})
};

render() {
    return (
        <div>
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            {this.state.loading || !this.state.weather ? (
                <div>loading...</div>
            ) : (
                <div>
                    <h1>Christmas Bay</h1>
                    <h1>Wave Height: {this.state.weather.waveHeight.noaa} Meter/s</h1>
                    <h1>Air Temperature: {this.state.weather.airTemperature.noaa}°C</h1>
                    <h1>Pressure: {this.state.weather.pressure.noaa} mb</h1>
                    <h1>Water Temperature: {this.state.weather.waterTemperature.noaa}°C</h1>
                    <h1>Humidity: {this.state.weather.humidity.noaa} % Relative Humidity</h1>
                </div>
            )}
            </div>
        </div>    
    );
}}





export default App2;