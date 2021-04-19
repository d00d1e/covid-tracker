import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./api";

import "./App.css";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="container">
          <Cards data={data} />
          <CountryPicker />
          <Chart />
        </div>
      </div>
    );
  }
}
