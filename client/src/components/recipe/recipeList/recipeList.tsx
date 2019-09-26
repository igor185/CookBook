import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe, {newRecipeDefault} from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {createRecipe, fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
import RecipeConstructor from "../constructor";
import {Button} from "semantic-ui-react";
interface IProps {
    recipes: null | IRecipe[],
    fetchRecipes: () => any,
    createRecipe: (recipe : {name: string, description: string, imageUrl?: string}) => any
}

const RecipeList = (props: IProps) => {
    if(!props.recipes){
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <div>
            <RecipeConstructor recipe={newRecipeDefault} trigger={<Button>Create new recipe</Button>} onSave={props.createRecipe}/>
            {props.recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe}/>)}
        </div>
    )
};

const mapStateToProps = (rootState: any, props: any) => ({
    ...props,
    recipes: rootState.recipeList.recipes
});

const actions = {
    fetchRecipes,
    createRecipe
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);