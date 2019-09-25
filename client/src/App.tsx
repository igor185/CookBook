import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from "./routing/Home";
import store from "./redux/store";
import {Provider} from 'react-redux';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Home/>
            </Router>
        </Provider>
    );
};

export default App;
