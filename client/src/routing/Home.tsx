import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from "../components/recipe/recipeList/recipeList";
import SocketService from "../services/socket.service";
import RecipeView from "../components/recipeViewAll";


const Home = () => {
    new SocketService();



    return (
        <div className={"container"}>
            <Switch>
                <Route exact path={'/recipe-view/:id'} component={RecipeView}/>
                <Route path={"/"} component={RecipeList}/>
            </Switch>
        </div>)
};

export default Home;