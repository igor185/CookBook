import React from 'react';
import {INewRecipe} from "../../interfaces/IRecipe";
import {Button, Form, Image, Input, Modal, TextArea} from "semantic-ui-react";
import {config} from "../../config";
import './recipe.scss';
import ImageUploader from "../imageUploader/imageUploader";
import {INewIngredient} from "../../interfaces/IIngredien";

export interface IProps {
    recipe: INewRecipe,
    trigger: any,
    onCancel: () => void,
    onSave: (recipe: { name: string, description: string, imageUrl?: string }) => void
    open: boolean
}

export interface IState {
    recipe: INewRecipe,
    value: string
}

class RecipeConstructor extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            recipe: {
                ...this.props.recipe,
                imageUrl: this.props.recipe.imageUrl || config.DEFAULT_RECIPE
            },
            value: ''
        }
    }

    addIngredient(ingredient: INewIngredient){
        this.setState((state) => {
            const ingredients = state.recipe.ingredients;
            ingredients.push(ingredient);
            return{
                recipe: {
                    ...state.recipe,
                    ingredients
                }
            }
        })
    }

    render() {
        const {imageUrl, name, description, ingredients} = this.state.recipe;

        return (
            <Modal trigger={this.props.trigger} open={this.props.open}>
                <Modal.Header>Create recipe</Modal.Header>
                <Modal.Content scrolling>
                    <div>
                        <Image src={imageUrl} wrapped ui={false} className={"recipePhoto"}/>
                        <ImageUploader changeUrl={(url: string) => {
                            this.setState((state) => ({recipe: {...state.recipe, imageUrl: url}}))
                        }}>Upload photo</ImageUploader>
                    </div>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <Input type='text' placeholder='Name' value={name} onChange={(e) => {
                                    const value = e.target.value;
                                    this.setState((state) => ({recipe: {...state.recipe, name: value}}))
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <TextArea placeholder='Description' value={description} onChange={(e) => {
                                    // @ts-ignore
                                    const value = e.target.value;
                                    this.setState((state) => ({recipe: {...state.recipe, description: value}}))
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Ingredients</label>
                                <Input placeholder={"Add ingredient"} value={this.state.value} onChange={(e) => {
                                    this.setState({value: e.target.value})
                                }}/>
                                <Button onClick={() => {
                                    this.addIngredient({name: this.state.value});
                                    this.setState({value: ''})
                                }}>Add</Button>
                                <ul>
                                    {ingredients.map(e => <li>{e.name}</li>)}
                                </ul>
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>

                <Modal.Actions>
                    <Button onClick={() => this.props.onCancel()}>Cancel</Button>
                    <Button type='submit' onClick={() => {
                        this.props.onSave({...this.state.recipe});
                        this.props.onCancel()
                    }}>Create</Button>
                </Modal.Actions>
            </Modal>
        )
    }

}

export default RecipeConstructor;