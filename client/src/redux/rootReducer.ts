import { combineReducers } from 'redux';
import recipeList from '../components/recipe/redux/reducer'
import recipeAllView from '../components/recipeViewAll/redux/reducer'

export default combineReducers({
    recipeList,
    recipeAllView
});