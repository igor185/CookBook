import React from "react";
import IRecipe, {newRecipeDefault} from "../../interfaces/IRecipe";
import Spinner from "../spinner/Spinner";
import {Dropdown, Image} from 'semantic-ui-react';
import './style.scss'
import moment from "moment";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteRecipeVersions, fetchAllVersions} from "./redux/actions";

interface IProps {
    match: any,
    recipes: null | Array<{
        id: string;
        prevRecipe: IRecipe
    }>
    fetchAllVersions: (id: string) => any,
    id: string | null,
    deleteRecipeVersions: () => any;
}

interface IState {
    option: {
        id: string,
        prevRecipe: IRecipe
    }
}

class RecipeView extends React.Component<IProps, IState> {
    state = {
        option: {
            id: '',
            prevRecipe: newRecipeDefault.recipe
        }
    };


    componentWillUnmount(): void {
        this.props.deleteRecipeVersions();
    }

    render() {
        const props = this.props;
        const id = props.match.params.id;


        if (props.id !== id || !(props.recipes && props.recipes[0])) {
            props.fetchAllVersions(id);
            return <Spinner/>
        }

        if (!this.state.option.id) {
            this.setState({option: props.recipes[0]})
        }

        const {name, description, imageUrl, ingredients, createdAt} = this.state.option.prevRecipe;

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
                    value={this.state.option.prevRecipe.version}
                    onChange={(e, data) => {
                        if (data.value && props.recipes) {
                            this.setState({option: props.recipes.filter(elem => elem.prevRecipe.version === data.value)[0]})
                        }
                    }}
                />
                        </span>
                <div className={"meta"}>{moment(createdAt).fromNow()}</div>
                <div className="header">
                    <h2>{name}</h2>
                </div>
                <div className={"basic"}>
                    <div className={"photo-wrp"}>
                        <Image src={imageUrl} size={'medium'} floated={'left'}/>
                    </div>
                    <div className={"description"}>
                        {description.split('\n').map(i => {
                            return <p>{i}</p>
                        })}
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
    }
}

const mapStateToProps = (rootState: any, props: any) => ({
    ...props,
    recipes: rootState.recipeAllView.recipes,
    id: rootState.recipeAllView.id
});

const actions = {
    fetchAllVersions,
    deleteRecipeVersions
};

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecipeView);