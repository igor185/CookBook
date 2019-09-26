import React from 'react';
import {Card, Image} from "semantic-ui-react";
import IRecipe from "../../../interfaces/IRecipe";
import {config} from "../../../config";
import moment from "moment";

const RecipePreview = (props: {recipe: IRecipe}) => {
    const {name, description, imageUrl, createdAt} = props.recipe;
    return (
        <Card>
            <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false} size='mini'/>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default RecipePreview;