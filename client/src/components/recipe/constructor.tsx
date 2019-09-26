import React from 'react';
import IRecipe from "../../interfaces/IRecipe";
import {Button, Form, Image, Input, Modal, TextArea} from "semantic-ui-react";
import {config} from "../../config";
import './recipe.scss';
import ImageUploader from "../imageUploader/imageUploader";
import recipeList from "./recipeList/recipeList";

export interface IProps {
    recipe: IRecipe,
    trigger: any,
    onCancel: () => void,
    onSave: (recipe: { name: string, description: string, imageUrl?: string }) => void
    open: boolean
}

export interface IState {
    recipe: IRecipe
}

class RecipeConstructor extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            recipe: {
                ...this.props.recipe,
                imageUrl: this.props.recipe.imageUrl || config.DEFAULT_RECIPE
            }
        }
    }


    render() {
        const {imageUrl, name, description} = this.state.recipe;

        return (
            <Modal trigger={this.props.trigger} open={this.props.open}>
                <Modal.Header>Create recipe</Modal.Header>
                <Modal.Content image scrolling>
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
                            <Button type='submit' onClick={() => {
                                this.props.onSave({...this.state.recipe});
                                this.props.onCancel()
                            }}>Create</Button>
                            <Button onClick={() => this.props.onCancel()}>Cancel</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

export default RecipeConstructor;