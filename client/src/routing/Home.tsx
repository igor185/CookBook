import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from "../components/recipe/recipeList/recipeList";

const Home = () => {
    return (<Switch>
        <Route to={"/"} component={RecipeList}/>
    </Switch>)
};

export default Home;