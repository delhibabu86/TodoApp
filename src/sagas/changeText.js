import { put, takeEvery } from 'redux-saga/effects';
import { ADD } from '../actions/todo';
import { CHANGE_TEXT } from '../actions/other';

function* action() {
  yield put({ type: CHANGE_TEXT, text: '' });
}

export default function* () {
  yield takeEvery(ADD, action);
}
