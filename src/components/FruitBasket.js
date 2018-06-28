import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => 
  <div className="fruit-basket">
    <Filter handleChange={props.handleChange} filters={props.filters} />
    <FilteredFruitList
      filter={props.currentFilter} items={props.items} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: null
}

export default FruitBasket;
