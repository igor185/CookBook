import React, {useState} from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";
import IRecipe from "../../../interfaces/IRecipe";
import {config} from "../../../config";
import moment from "moment";
import './style.scss';

const RecipePreview = (props: { recipe: IRecipe }) => {
    const {name, description, imageUrl, createdAt} = props.recipe;

    const [hover, setHover] = useState(false);

    return (
        <Card className={'preview-recipe'}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
            <Image src={imageUrl || config.DEFAULT_RECIPE} wrapped ui={false} size='mini'/>
            {hover && (
            <div className={"preview-icons-wrp"}>
                <Button icon={'write'} className={'icon'} onClick={(e) => {
                    e.preventDefault();
                }}/>
                <Button icon={'trash'} className={'icon'} onClick={(e) => {
                    e.preventDefault();
                }}/>
            </div>)}
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