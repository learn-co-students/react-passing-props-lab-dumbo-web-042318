import React from 'react';

import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {

    return (
      <div className="fruit-basket">
        <FilteredFruitList
          filter={props.currentFilter}
          fruit={props.fruit}/>
      </div>
    );

}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
};

export default FruitBasket;
