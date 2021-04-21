import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./api";

import "./App.css";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {};

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="container">
          <h1>C🦠VID-19 Tracker</h1>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart />
        </div>
      </div>
    );
  }
}
