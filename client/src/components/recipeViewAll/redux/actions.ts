import {DELETE, GET_ALL_VERSIONS} from "./actionTypes";

export const fetchAllVersions = (id: string) => {
    return {
        type: GET_ALL_VERSIONS,
        payload: {
            id
        }
    }
};

export const deleteRecipeVersions = () => ({
    type: DELETE
});