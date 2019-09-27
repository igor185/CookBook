import React, {useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IRecipe, {INewRecipe, newRecipeDefault} from "../../../interfaces/IRecipe";
import Spinner from "../../spinner/Spinner";
import {addRecipeToList, createRecipe, deleteRecipe, editRecipe, fetchRecipes} from "../redux/actions";
import RecipePreview from "./recipePreview";
import SocketService from "../../../services/socket.service";
import {NavLink} from "react-router-dom";
import {Button} from "semantic-ui-react";
import RecipeConstructor from "../constructor";


interface IProps {
    recipes: null | Array<{
        id: string,
        createAt: string;
        recipe: IRecipe
    }>,
    fetchRecipes: () => any,
    createRecipe: (recipe: INewRecipe) => any,
    addRecipeToList: (recipe: IRecipe) => any
    deleteRecipe: (id: string) => any;
    editRecipe: (recipe: INewRecipe) => any
}

const RecipeList = (props: IProps) => {
    if (!SocketService.added(props.addRecipeToList)) {
        SocketService.on('new-recipe', props.addRecipeToList);
    }

    const [openModal, setModal] = useState(false);
    const [recipe, setRecipe] = useState(newRecipeDefault);

    if (!props.recipes) {
        props.fetchRecipes();
        return <Spinner/>
    }

    return (
        <div>
            <RecipeConstructor recipe={recipe} open={openModal} trigger={
                <div className={'create-recipe-wrp'} onClick={() => {
                    setModal(true);
                    setRecipe(newRecipeDefault);
                }}>
                    <Button color="teal" centered={true}>Create new recipe</Button>
                </div>} onSave={props.createRecipe}
                               onCancel={() => setModal(false)}
                                onEdit={props.editRecipe}/>
            <div className={"cards-wrp"}>
                {props.recipes.map(recipe =>
                    <NavLink to={'/recipe-view/' + recipe.id}>
                        <RecipePreview key={recipe.id} recipe={recipe}
                                       deleteRecipe={() => props.deleteRecipe(recipe.recipe.id)}
                                        editRecipe={() => {
                                            setModal(true);
                                            setRecipe(recipe);
                                        }}/>
                    </NavLink>)}
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
    addRecipeToList,
    deleteRecipe,
    editRecipe
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeList);