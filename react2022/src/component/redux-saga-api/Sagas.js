import {call, put, takeEvery} from 'redux-saga/effects'
import {GET_USER_FETCH, GET_USER_SUCCESS} from './actions'

function userFetch(){

    return fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json());

}

function* getUserFetchData(){
    const users= yield call(userFetch);
    yield put({type: GET_USER_SUCCESS, users})
}

function* mysaga(){
    yield takeEvery(GET_USER_FETCH, getUserFetchData);
}

export default mysaga;