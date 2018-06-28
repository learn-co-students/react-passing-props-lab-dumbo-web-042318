import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filters: [],
            currentFilter: null,
            items: []
          };
    }

    componentDidMount() {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(items => this.setState({ items }));
    };

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ selectedFilter: event.target.value });
    }
    
    
    render() {
        return <FruitBasket handleChange={this.handleFilterChange} filter={this.state.selectedFilter} items={this.state.items}/>;
    }
} 

export default App;
