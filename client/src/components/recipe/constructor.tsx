import React from 'react';
import IRecipe from "../../interfaces/IRecipe";
import {Form, Image, Input, Modal, TextArea} from "semantic-ui-react";
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
                    <Input focus placeholder='Name'/>
                    <Form>
                        <TextArea placeholder="Describe"/>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
};

export default RecipeConstructor;