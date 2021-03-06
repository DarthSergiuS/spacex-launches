import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './bootstrap.min.css';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className="App container">
                        <h1 style={{width: 300, display: 'block', margin: 'auto', textAlign: 'center'}}>SpaceX</h1>
                        <Route exact path="/" component={Launches}/>
                        <Route exact path="/launch/:flight_number" component={Launch}/>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
