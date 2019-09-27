import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import IRecipe, {newRecipeDefault} from "../../interfaces/IRecipe";
import Spinner from "../spinner/Spinner";
import {Dropdown, Image} from 'semantic-ui-react';
import './style.scss'
import {fetchAllVersions} from "./redux/actions";

interface IProps {
    match: any,
    recipes: null | Array<{
        id: string;
        prevRecipe: IRecipe
    }>
    fetchAllVersions: (id: string) => any,
    id: string | null
}
const RecipeView = (props: IProps) => {
    const id = props.match.params.id;

    const [option, setOption] = useState<{id: string, prevRecipe: IRecipe}>({id: '', prevRecipe: newRecipeDefault.recipe});

    if (props.id !== id || !(props.recipes && props.recipes[0])) {
        props.fetchAllVersions(id);
        return <Spinner/>
    }

    if(!option.id){
        setOption(props.recipes[0])
    }
    const {name, description, imageUrl, ingredients, createdAt, version} = option.prevRecipe;

    const options: Array<any> = props.recipes.map(elem => ({
        key: elem.prevRecipe.id,
        value: elem.prevRecipe.version,
        text: elem.prevRecipe.version,
    }));

    return (
        <div className={"recipe-view-all"}>
            <span>
                This is version {'  '}
                <Dropdown
                    options={options}
                    value={option.prevRecipe.version}
                    onChange={(e,data) => {
                        if(data.value && props.recipes){
                            setOption(props.recipes.filter(elem => elem.prevRecipe.version === data.value)[0])
                        }
                    }}
                />
            </span>
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
    recipes: rootState.recipeAllView.recipes,
    id: rootState.recipeAllView.id
});

const actions = {
    fetchAllVersions
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeView);