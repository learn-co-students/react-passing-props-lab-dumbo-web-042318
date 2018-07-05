import React, { Component } from 'react';

import FruitBasket from './FruitBasket';
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return(
      <div>
        <Filter
          filters={this.state.filters}
          handleChange={this.handleFilterChange}
        />
        <FruitBasket
          currentFilter={this.state.currentFilter}
          fruit={this.state.fruit}
        />
      </div>
    );
  }
}

export default App;
