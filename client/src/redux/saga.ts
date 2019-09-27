import { all } from 'redux-saga/effects';
import recipeListSaga from "../components/recipe/redux/saga";
import recipeViewSaga from '../components/recipeViewAll/redux/saga';

export default function* rootSaga() {
    yield all([
        recipeListSaga(),
        recipeViewSaga()
    ])
};