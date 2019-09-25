import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
interface IProps {
    recipes: null | IRecipe[],
    fetchRecipes: () => any
}

const RecipeList = (props: IProps) => {
    if(!props.recipes){
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <div>
            {props.recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe}/>)}
        </div>
    )
};

const mapStateToProps = (rootState: any, props: any) => ({
    ...props,
    recipes: rootState.recipeList.recipes
});

const actions = {
    fetchRecipes
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);