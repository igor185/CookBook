import {all, call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_RECIPES, SET_RECIPES} from "./actionTypes";
import webApi from "../../../helpers/webApi";
import {config} from "../../../config";

function* fetchRecipes() {
    try {
        const recipes = yield call(webApi, {
            endpoint: config.API_URL + '/api/recipe',
            method: 'GET'
        });

        yield put({type: SET_RECIPES, payload: {recipes}})
    } catch (e) {
        console.log(e);
    }
}


function* watchFetchRecipes() {
    yield takeEvery(FETCH_RECIPES, fetchRecipes)
}

export default function* () {
    yield all([
        watchFetchRecipes()
    ])
}