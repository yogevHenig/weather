import React from 'react';
import './WeatherCard.css';

const WeatherCard = ( {city }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">{city}</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Temperature</label>
              <label className="db fw6 lh-copy f6">Humidity</label>
              <label className="db fw6 lh-copy f6">Windspeed</label>
              <label className="db fw6 lh-copy f6">Icon</label>
            </div>
          </fieldset>
        </div>
      </main>
    </article>
  );

}

export default WeatherCard;
