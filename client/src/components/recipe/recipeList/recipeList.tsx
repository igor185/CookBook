import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {addRecipeToList, createRecipe, fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
import SocketService from "../../../services/socket.service";
import {NavLink} from "react-router-dom";

interface IProps {
    recipes: null | Array<{
        id: string,
        createAt: string;
        recipe: IRecipe
    }>,
    fetchRecipes: () => any,
    createRecipe: (recipe: { name: string, description: string, imageUrl?: string }) => any,
    addRecipeToList: (recipe: IRecipe) => any
}

const RecipeList = (props: IProps) => {
    if (!SocketService.added(props.addRecipeToList)) {
        SocketService.on('new-recipe', props.addRecipeToList);
    }

    if (!props.recipes) {
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <div className={"cards-wrp"}>
            {props.recipes.map(recipe =>
                <NavLink to={'/recipe-view/' + recipe.recipe.id}>
                    <RecipePreview key={recipe.id} recipe={recipe.recipe}/>
                </NavLink>)}
        </div>
    )
};

const mapStateToProps = (rootState: any, props: any) => ({
    ...props,
    recipes: rootState.recipeList.recipes
});

const actions = {
    fetchRecipes,
    createRecipe,
    addRecipeToList
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);