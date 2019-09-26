import React from 'react';
import IRecipe from "../../interfaces/IRecipe";
import {Button, Form, Image, Input, Modal, TextArea} from "semantic-ui-react";
import {config} from "../../config";
import './recipe.scss';

export interface IProps {
    recipe: IRecipe,
    trigger: any,
    onCancel?: () => void,
    onSave: (recipe : {name: string, description: string, imageUrl?: string}) => void
}

export interface IState {
    recipe: IRecipe
}

class RecipeConstructor extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            recipe: {
                ...this.props.recipe
            }
        }
    }


    render() {
        const {imageUrl, name, description} = this.state.recipe;

        return (
            <Modal trigger={this.props.trigger}>
                <Modal.Header>Create recipe</Modal.Header>
                <Modal.Content image scrolling className={"recipePhoto"}>
                    <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false}/>
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
                            <Button type='submit' onClick={()=> {
                                this.props.onSave({...this.state.recipe})
                            }}>Create</Button>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

export default RecipeConstructor;