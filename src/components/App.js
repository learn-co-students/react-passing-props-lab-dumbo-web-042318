import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            filters: [],
            currentFilter: null,
            items: [],
            fruit: []
          };
    }

    componentDidMount() {
        fetch('/api/fruit')
          .then(response => response.json())
          .then(items => this.setState({ items }));

        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    };

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }
    
    
    render() {
        return <FruitBasket handleChange={this.handleFilterChange} filters={this.state.filters} currentFilter={this.state.currentFilter} items={this.state.items}/>;
    }
} 

export default App;
