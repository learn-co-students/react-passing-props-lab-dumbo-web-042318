import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => 
  <div className="fruit-basket">
    <Filter handleChange={props.handleChange} />
    <FilteredFruitList
      filters={props.filters} items={props.items} />
  </div>;

export default FruitBasket;
