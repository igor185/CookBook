import React from 'react';
import {Card, Image} from "semantic-ui-react";
import IRecipe from "../../../interfaces/IRecipe";
import {config} from "../../../config";

const RecipePreview = (props: {recipe: IRecipe}) => {
    const {name, description, imageUrl} = props.recipe;
    return (
        <Card>
            <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default RecipePreview;