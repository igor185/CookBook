import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IRecipe from "../../../interfaces/IRecipe";
import { Redirect } from "react-router";
import Spinner from "../../spinner/Spinner";
import {fetchRecipes} from "../redux/actions";
import {Image} from 'semantic-ui-react';
import './style.scss'

interface IProps {
    match: any,
    recipes: IRecipe[],
    fetchRecipes: () => any
}
const RecipeView = (props: IProps) => {
    if (!props.recipes) {
        props.fetchRecipes();
        return <Spinner/>
    }
    const id = props.match.params.id;
    const recipe: IRecipe[] = props.recipes.filter(elem => elem.id === id);

    if(!recipe || recipe.length === 0) {
        return <Redirect to={''}/>;
    }

    const {name, description, imageUrl, ingredients, createdAt} = recipe[0];

    return(
        <div className={"recipe-view-all"}>
            <div className={"main-info"}>
                <Image src={imageUrl} size={'big'}/>
                <div className={"basic-info"}>
                    <div className={"basic-info-name"}>
                        {name}
                    </div>
                    <div className={"basic-info-description"}>
                        {description}
                    </div>
                </div>
            </div>
            <div className={"ingredients-wrp"}>
                <label>Ingredients</label>
                <ul>
                    {ingredients.map(elem => <li key={elem.id}>{elem.name}</li>)}
                </ul>
            </div>
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
)(RecipeView);