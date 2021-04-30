import * as constants from "./constants";


export const getDemo = () => ({
    type: constants.GET_DEMO,
});

export const getDemoSuccess = payload => ({
    type: constants.GET_DEMO_SUCCESS,
    payload,
});

export const getDemoError = payload => ({
    type: constants.GET_DEMO_ERROR,
    payload,
});
