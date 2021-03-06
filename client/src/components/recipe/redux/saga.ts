import {all, call, put, takeEvery} from 'redux-saga/effects';
import {CREATE_RECIPE, DELETE_RECIPE, FETCH_RECIPES, SET_RECIPES, UPDATE_RECIPE} from "./actionTypes";
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

function* createRecipe(action: any) {
    try {
        yield call(webApi, {
            endpoint: '/api/recipe',
            method: 'PUT',
            body:{
                ...action.payload.recipe || null
            }
        });
    }catch (e) {
        console.log(e);
    }
}

function* editRecipe(action: any){
    try{
        yield call(webApi,{
            method: "POST",
            endpoint:"/api/recipe",
            body:{
                ...action.payload.recipe
            }
        })
    }catch(e){
        console.log(e)
    }
}

function* deleteRecipe(action:any) {
    try{
        yield call(webApi,{
            endpoint: '/api/recipe',
            method: "DELETE",
            body:{
                id: action.payload.id
            }
        })
    }catch (e) {
        console.log(e);
    }
}


function* watchFetchRecipes() {
    yield takeEvery(FETCH_RECIPES, fetchRecipes)
}

function* watchCreateRecipes() {
    // @ts-ignore
    yield takeEvery(CREATE_RECIPE, createRecipe)
}

function* watchDeleteRecipe() {
    yield takeEvery(DELETE_RECIPE, deleteRecipe)
}

function* watchEditRecipe(){
    yield takeEvery(UPDATE_RECIPE, editRecipe)
}

export default function* () {
    yield all([
        watchFetchRecipes(),
        watchCreateRecipes(),
        watchDeleteRecipe(),
        watchEditRecipe()
    ])
}