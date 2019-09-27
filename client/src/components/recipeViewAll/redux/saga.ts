import {all, call, put, takeEvery} from 'redux-saga/effects';
import {GET_ALL_VERSIONS, SET_ALL_VERSIONS} from "./actionTypes";
import webApi from "../../../helpers/webApi";

function* fetchRecipeVersions(action: any){
    try{
        const recipes = yield call(webApi, {
            endpoint: "/api/recipe/"+ action.payload.id,
            method: "GET"
        });

        yield put({type: SET_ALL_VERSIONS, payload: {recipes}});
    }catch (e) {
        console.log(e);
    }
}

function* watchFetchRecipeVersions(){
    yield takeEvery(GET_ALL_VERSIONS, fetchRecipeVersions)
}

export default function*(){
    yield all([
        watchFetchRecipeVersions()
    ])
}