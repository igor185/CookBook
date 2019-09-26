import React from 'react';
import IRecipe from "../../interfaces/IRecipe";
import {Button, Form, Image, Input, Modal, TextArea} from "semantic-ui-react";
import {config} from "../../config";
import './recipe.scss';

export interface IProps {
    recipe: IRecipe,
    trigger: any,
    onCancel?: () => void,
    onSave?: (recipe: IRecipe) => void
}



const RecipeConstructor = (props: IProps) => {
    const {imageUrl} = props.recipe;

    return (
        <Modal trigger={props.trigger}>
            <Modal.Header>Create recipe</Modal.Header>
            <Modal.Content image scrolling className={"recipePhoto"}>
                <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false}/>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <TextArea placeholder='Description' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
};

export default RecipeConstructor;