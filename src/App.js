import React, { Component } from 'react';
import CardArray from './CardArray';
import SearchBar from './SearchBar';
import { robots } from './robots';
import Scroll from './Scroll'
import './App.css'
class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })

    }
    render() {
        const filteredRobots = this.state.robots.filter(
            robots => {
                return (robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
            }
        )
        if (this.state.robots.length === 0) {
            return <h1>LOading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends Database.Inc</h1>
                    <SearchBar searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardArray robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;