import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

import { setSearchField, requestRobots } from '../action'

//mapStateToProps is telling me what state, what piece state I need to listen to, and send down as props
const mapStateToProps = state => {
    console.log(state)
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//mapDispatchToProps says hey tell me what props I should listen to that are actions that need to get dispatched.
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {

        const { searchField,
                onSearchChange,
                robots,
                isPending,
                error } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        });

        return isPending ?
                <h1>Loading...</h1> :
                (
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange} />
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots}/> 
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);