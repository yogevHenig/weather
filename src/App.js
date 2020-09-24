import React, { Component } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import SearchLocation from './Components/SearchLocation/SearchLocation';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cities: [],
      city: [],
      // city: {
      //                       name: '',
      //                       temperature: '',
      //                       humidity: '',
      //                       windspeed: '',
      //                       icon: ''
      //                     },
      input: ''
    }

  }

  fetchDataByCity = async (city, arr) => {

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://www.google.com/search?q=weather+${city}`
    let rawData = await fetch(proxyUrl + targetUrl);
    let data =  await rawData.text();
    data = data.substr(data.indexOf('Weather Result'))
    let temperatureIndex = data.indexOf('id="wob_ttm" style="display:none">')
    let temperature = data.substr(temperatureIndex + 'id="wob_ttm" style="display:none">'.length,2).split('').filter(x => x >= 0 && x <= 9).join('')
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
    const cities = arr.concat([{
                          name: city,
                          temperature: temperature,
                          humidity: humidity,
                          windspeed: windspeed,
                          icon: iconURL
                        }])
    return cities
}

  componentDidMount() {
    this.fetchDataByCity("Tel-Aviv",[]).then(cities => {
      this.fetchDataByCity("New-York",cities)
      .then (cities => {
        this.setState({ cities })
      })
    })
    //cities = this.fetchDataByCity("New-York",cities);
    //this.setState({ cities })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = (event) =>{
    this.fetchDataByCity(this.state.input,[])
    .then(city => {
       this.setState({ city })
     })
    }

  removeCity = () => {
    const city = this.state.city;
    city.pop();
    this.setState({ city })
  }


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfnS75QwwkgQCc01HRB3SQOQDrAbqCW4D_3g&usqp=CAU'} className="App-logo" alt="logo" />
          <p>
            Let's See Some Weather!
          </p>
        </header>
        <div className="AppBody">
          <WeatherCard city = { (this.state.cities[0]) ? (this.state.cities[0]).name : ''  }
            temperature = { (this.state.cities[0]) ? (this.state.cities[0]).temperature : ''}
            humidity = { (this.state.cities[0]) ? this.state.cities[0].humidity : ''}
            windspeed = { (this.state.cities[0]) ? this.state.cities[0].windspeed: ''}
            iconURL = { (this.state.cities[0]) ? this.state.cities[0].icon : ''}
          />
          <WeatherCard city = { (this.state.cities[1]) ? (this.state.cities[1]).name : ''  }
            temperature = {(this.state.cities[1]) ? (this.state.cities[1]).temperature : ''}
            humidity = { (this.state.cities[1]) ? this.state.cities[1].humidity : ''}
            windspeed = { (this.state.cities[1]) ? this.state.cities[1].windspeed: ''}
            iconURL = { (this.state.cities[1]) ? this.state.cities[1].icon : ''}
          />
        </div>
          <SearchLocation onButtonSubmit = { this.onButtonSubmit }  onInputChange = { this.onInputChange } />
          {
            this.state.city.length !== 0 ?
              <div>
                <WeatherCard city = { (this.state.city[0]) ? (this.state.city[0]).name : ''  }
                  temperature = {(this.state.city[0]) ? (this.state.city[0]).temperature : ''}
                  humidity = { (this.state.city[0]) ? this.state.city[0].humidity : ''}
                  windspeed = { (this.state.city[0]) ? this.state.city[0].windspeed: ''}
                  iconURL = { (this.state.city[0]) ? this.state.city[0].icon : ''}
                />
              </div>
              :
              <div></div>
          }
      </div>
    );
  }

}
export default App;