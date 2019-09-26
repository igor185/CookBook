import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe, {newRecipeDefault} from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {addRecipeToList, createRecipe, fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
import RecipeConstructor from "../constructor";
import {Button, Card, Container} from "semantic-ui-react";
import SocketService from "../../../services/socket.service";

interface IProps {
    recipes: null | IRecipe[],
    fetchRecipes: () => any,
    createRecipe: (recipe: { name: string, description: string, imageUrl?: string }) => any,
    addRecipeToList: (recipe: IRecipe) => any
}

const RecipeList = (props: IProps) => {
    if (!SocketService.added(props.addRecipeToList)) {
        SocketService.on('new-recipe', props.addRecipeToList);
        console.log('add recipe')
    }

    if (!props.recipes) {
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <Container>
            <RecipeConstructor recipe={newRecipeDefault} trigger={<Button>Create new recipe</Button>}
                               onSave={props.createRecipe}/>
            <Card.Group>
                {props.recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe}/>)}
            </Card.Group>
        </Container>
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