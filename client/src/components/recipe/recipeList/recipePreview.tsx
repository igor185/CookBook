import React, {useState} from 'react';
import {Button, Card, Image} from "semantic-ui-react";
import IRecipe from "../../../interfaces/IRecipe";
import {config} from "../../../config";
import moment from "moment";
import './style.scss';

const RecipePreview = (props: {
    recipe: {

        id?: string; recipe: IRecipe
    }, deleteRecipe: () => void, editRecipe: () => void
}) => {
    const {name, description, imageUrl, createdAt} = props.recipe.recipe;

    const [hover, setHover] = useState(false);

    return (
        <Card className={'preview-recipe'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
            <div className={"recipePhoto"}>
                <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false} size='mini'/>
            </div>
            {hover && (
                <div className={"preview-icons-wrp"}>
                    <Button icon={'write'} className={'icon'} onClick={(e) => {
                        e.preventDefault();
                        props.editRecipe();
                    }}/>
                    <Button icon={'trash'} className={'icon'} onClick={(e) => {
                        e.preventDefault();
                        props.deleteRecipe();
                    }}/>
                </div>)}
            <Card.Content>
                <Card.Header>
                    <div className={"header-name"}>
                        {name}
                    </div>
                </Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    <div className={"ellipsis"}>
                        {description}
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    )
};

export default RecipePreview;