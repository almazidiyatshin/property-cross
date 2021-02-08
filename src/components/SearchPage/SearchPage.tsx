import * as React from 'react';
import { Component } from 'react';
import './SearchPage.scss';

export class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        <div id="menu">
          <h1>PropertyCross</h1>
          <button id="btn-faves">Faves</button>
        </div>
        <p>
          Use the form below to search for houses to buy. You can search by
          place-name, postcode, or click 'My location', to search in your
          current location.
        </p>
        <input type="text" placeholder="Type your place" />
        <button>Go</button>
        <button>My location</button>

        <div>
          <h2>Recent searches:</h2>
          <div id="output-area">
            <ul>
              <li>Search 1</li>
              <li>Search 2</li>
              <li>Search 3</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Please, select a location below:</h2>
          <div id="output-area">
            <ul>
              <li>Location 1</li>
              <li>Location 2</li>
              <li>Location 3</li>
            </ul>
          </div>
        </div>

        <p id="error-message">There was a problem with your search</p>
      </div>
    );
  }
}
