import React, { Component } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import SearchLocation from './Components/SearchLocation/SearchLocation';


class App extends Component {
  constructor(){
    super();
    this.state = {
      cities: [],
      city: undefined,
      input: ''
    }
  }

  fetchDataByCity = async (city) => {
    console.log('fetch data for', city)
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://www.google.com/search?q=weather+${city}`
    try {
      let rawData = await fetch(proxyUrl + targetUrl, {
  			headers: {
  			 	'Access-Control-Allow-Origin': 'https://yogevhenig.github.io/weather/'
  			}
  		})
      let data =  await rawData.text();
      if (!data.length){
        throw Error("no data!")
      }

      console.log('data recieved')

      let startIndex = data.indexOf('Weather Result')
      if (startIndex === -1){
        startIndex = data.indexOf('תוצאת')
      }
      if (startIndex === -1){
        throw Error("wrong data!")
      }

      data = data.substr(startIndex)

      let temperatureIndex = data.indexOf('id="wob_ttm" style="display:none">')
      let temperature = data.substr(temperatureIndex + 'id="wob_ttm" style="display:none">'.length,2).split('').filter(x => x >= 0 && x <= 9).join('')
      let humidityIndex = data.indexOf('<span id="wob_hm">')
      let humidity = data.substr(humidityIndex + '<span id="wob_hm">'.length,2)
      let windspeedIndex = data.indexOf('d="wob_tws">')
      let windspeed = data.substr(windspeedIndex + 'd="wob_tws">'.length,2)
      let iconUrlStartIndex = data.indexOf('gstatic');
      let iconUrlEndIndex = data.substr(iconUrlStartIndex).indexOf('png')
      let iconURL = data.substring(iconUrlStartIndex, iconUrlEndIndex + iconUrlStartIndex + 3); // 3 for the 'png'

      console.log('finished', city);

      return {
                name: city,
                temperature: temperature,
                humidity: humidity,
                windspeed: windspeed,
                icon: iconURL
              }
    }// end of try
    catch (err){
      console.log(err)
    }

}

  async componentDidMount()  {
    let city1 = await this.fetchDataByCity("Tel-Aviv");
    let city2 = await this.fetchDataByCity("New-York");
    let cities = [ city1, city2 ]
    this.setState({ cities });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = async (event) =>{
    let city = await this.fetchDataByCity(this.state.input);
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
    	  		{
              this.state.cities.length === 0 ?
                <h1>Loading...</h1>
              :
              <div className="AppBody">
              {
                this.state.cities.map((city , i ) => {
                  return (
                      <WeatherCard
                        key = { i }
                        city = { this.state.cities[i].name }
                        temperature = { this.state.cities[i].temperature }
                        humidity = { this.state.cities[i].humidity }
                        windspeed = { this.state.cities[i].windspeed }
                        iconURL = { this.state.cities[i].icon }
                      />
                  )
                })
              }
              </div>
      			}
          <SearchLocation onButtonSubmit = { this.onButtonSubmit }  onInputChange = { this.onInputChange } />
          {
            this.state.city !== undefined ?
              <div>
                <WeatherCard city = { this.state.city.name }
                  temperature = { this.state.city.temperature }
                  humidity = { this.state.city.humidity}
                  windspeed = { this.state.city.windspeed }
                  iconURL = { this.state.city.icon}
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
