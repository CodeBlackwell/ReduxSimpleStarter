import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};



    //Binding the context of onInputChange to be the SearchBar
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Fetch weather data


  }

  render() {
    return (
      <form className= "input-group" onSubmit={this.onFormSubmit}>
          <input
          placeholder= "Get a five day forecast in your favorite city"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange } />
          <span className="input-group-button"> 
            <button type="submit" className="btn btn-secondary"> Submit </button>
          </span>
        </form >
      );
  }
}
