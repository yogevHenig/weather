import React, { Component } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard';

import ReactHtmlParser from 'react-html-parser';



class App extends Component {
  constructor(){
    super();
    this.state = {
      name1: 'Tel-Aviv',
      name2: 'New-York',
      city1 : {
        temperature: '',
        Humidity: '',
        Windspeed: '',
        icon: '',
      },
      city2 : {
        temperature: '',
        Humidity: '',
        Windspeed: '',
        icon: ''
      }
    };
  }

  fetchDataByCity = (city, index) => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://www.google.com/search?q=weather+${city}`
    fetch(proxyUrl + targetUrl)
    .then(res => res.text())
    .then(data => {
      data = data.substr(data.indexOf('Weather Result'))
      let temperatureIndex = data.indexOf('id="wob_ttm" style="display:none">')
      let temperature = data.substr(temperatureIndex + 'id="wob_ttm" style="display:none">'.length,2)
      let humidityIndex = data.indexOf('<span id="wob_hm">')
      let humidity = data.substr(humidityIndex + '<span id="wob_hm">'.length,2)
      let windspeedIndex = data.indexOf('d="wob_tws">')
      let windspeed = data.substr(windspeedIndex + 'd="wob_tws">'.length,2)

      let iconUrlStartIndex = data.indexOf('gstatic');
      let iconUrlEndIndex = iconUrlStartIndex
      while (data[iconUrlEndIndex] + data[iconUrlEndIndex+1] + data[iconUrlEndIndex+2] !== 'png'){
        iconUrlEndIndex++;
      }

      let iconURL = data.substr(iconUrlStartIndex, iconUrlEndIndex - iconUrlStartIndex + 3);
      console.log(iconURL)
      if (index === 1){
        this.setState(
            {
              city1 : {
                temperature: temperature,
                humidity: humidity,
                windspeed: windspeed,
                icon: iconURL
              }
            }
        )
      } else {
        this.setState(
            {
              city2 : {
                temperature: temperature,
                humidity: humidity,
                windspeed: windspeed,
                icon: iconURL
              }
            }
        )
      }
    })
  }

  componentDidMount() {
    this.fetchDataByCity(this.state.name1,1);
    this.fetchDataByCity(this.state.name2,2);
    // console.log('heeeelo',this.state.city1.icon)
    // console.log(this.state.city2.icon)
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfnS75QwwkgQCc01HRB3SQOQDrAbqCW4D_3g&usqp=CAU'} className="App-logo" alt="logo" />
          <p>
            Let's See Some weather!
          </p>
        </header>
        <WeatherCard city = { this.state.name1 }
          temperature = {this.state.city1.temperature}
          humidity = {this.state.city1.humidity}
          windspeed = {this.state.city1.windspeed}
          iconURL = {this.state.city1.icon}
        />
        <WeatherCard city = { this.state.name2 }
          temperature = {this.state.city2.temperature}
          humidity = {this.state.city2.humidity}
          windspeed = {this.state.city2.windspeed}
          iconURL = {this.state.city2.icon}
        />
      </div>
    );
  }

}
export default App;
