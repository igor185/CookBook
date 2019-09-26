import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe, {newRecipeDefault} from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {addRecipeToList, createRecipe, fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
import RecipeConstructor from "../constructor";
import {Button} from "semantic-ui-react";
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
    }

    const [openModal, setModal] = useState(false);
    if (!props.recipes) {
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <div className={"container"}>
            <RecipeConstructor recipe={newRecipeDefault} open={openModal} trigger={
                <div className={'create-recipe-wrp'} onClick={() => setModal(true)}>
                    <Button color="teal" centered>Create new recipe</Button>
                </div>} onSave={props.createRecipe}
             onCancel={() => setModal(false)}/>
            <div className={"cards-wrp"}>
                {props.recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe}/>)}
            </div>
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