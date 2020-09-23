import React, { Component } from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard';

import ReactHtmlParser from 'react-html-parser';



class App extends Component {
  // constructor(){
  //   super();
  //   //this.state = initialState;
  // }

  componentDidMount() {
    //
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //     targetUrl = 'https://www.google.com/search?q=weather+new-york'
    // fetch(proxyUrl + targetUrl)



     let bla = fetch('https://www.google.com/search?q=weather+new-york')
    //   headers: { mode: 'no-cors' }
		// 	})
      .then((res) => console.log())
    //let bla = ReactHtmlParser()
    //https://www.google.com/search?q=weather+new-york
    console.log('hiii')
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
        <WeatherCard city = {'Tel-Aviv'}/>
        <WeatherCard city = {'New-York'}/>
      </div>
    );
  }

}
export default App;
