import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import RecipeList from "../components/recipe/recipeList/recipeList";
import SocketService from "../services/socket.service";
import RecipeView from "../components/recipe/recipeViewAll";
import RecipeConstructor from "../components/recipe/constructor";
import {newRecipeDefault} from "../interfaces/IRecipe";
import {Button} from "semantic-ui-react";
import {addRecipeToList, createRecipe, fetchRecipes} from "../components/recipe/redux/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const Home = ({createRecipe}: any) => {
    new SocketService();

    const [openModal, setModal] = useState(false);

    return (
        <div className={"container"}>
            <RecipeConstructor recipe={newRecipeDefault} open={openModal} trigger={
                <div className={'create-recipe-wrp'} onClick={() => setModal(true)}>
                    <Button color="teal" centered>Create new recipe</Button>
                </div>} onSave={createRecipe}
                               onCancel={() => setModal(false)}/>
            <Switch>
                <Route exact path={'/recipe-view/:id'} component={RecipeView}/>
                <Route path={"/"} component={RecipeList}/>
            </Switch>
        </div>)
};

const mapStateToProps = (rootState: any, props: any) => ({
    ...props,
});

const actions = {
    createRecipe,
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);