import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from "../components/recipe/recipeList/recipeList";
import SocketService from "../services/socket.service";

const Home = () => {
    new SocketService();
    return (<Switch>
        <Route to={"/"} component={RecipeList}/>
        <Route to={'/recipe-view'} component={}/>
    </Switch>)
};

export default Home;