import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
//Install Logger 
import { logger } from 'redux-logger';
//Install saga and install store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from '@redux-saga/core/effects';
//Install axios 
import axios from 'axios';

//saga is a function that is placed in a varible 
const sagaMiddleware = createSagaMiddleware()


const favoriteReducer  = (state = [], action) => {
    switch (action.type){
     case 'SET_FAVORITE':
        return action.payload
     default: 
        return state;
}

};

//where the function will yeild
function* watcherSaga() {
    yield takeEvery('GET_IMAGE', fetchFavorites)

}

function* fetchFavorites() {

    try {
        console.log('bout to fetch me some Images');

        const response = yield axios.get('/api/favorite')
            console.log('GET /plants response.data', response.data);

            yield put({
                type: 'SET_FAVORITE',
                payload: response.data

            })
    }
    catch (err) {
        console.log('fetchBooks failed', err);
        alert('There is something seriously wrong 🤮')

    }
}




const store = createStore(
    combineReducers({
        favoriteReducer 
    }),
    //The logger is also stored within the store
    applyMiddleware(sagaMiddleware, logger)
)
//run the middleware 
sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));