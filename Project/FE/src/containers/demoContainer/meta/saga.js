import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetDemo(action) {
    try {
        yield put(actions.getDemoSuccess())
    } catch(error) {
        yield put(actions.getDemoError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_DEMO, handleGetDemo),
    ]);
}
