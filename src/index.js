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
}

const homeReducer  = (state = [], action) => {
    switch (action.type){
     case 'SET_HOME':
        return action.payload
     default: 
        return state;
}
}

//where the function will yeild
function* watcherSaga() {
    // yield takeEvery('GET_IMAGE', fetchFavorites)
    yield takeEvery('GIPHY_SEARCH', giphySearch),
    yield takeEvery('ADD_FAVORITES', addFavorites )
}


function* addFavorites(action){

    let favoritesItem = action.payload;
    console.log('TESING Favorite item ', favoritesItem);
    

   const response = yield axios.post(`/api/favorite`, favoritesItem)
       console.log('Testing response for /POST', response);


}


function* giphySearch(action) {
    
    let search = action.payload;

    //Secondary
    const response = yield axios.get(`/api/search/${search}`);
    console.log("this is API response.data", response.data.data);

    // put saga version of dispatch
    yield put({
        type: 'SET_HOME',
        payload: response.data.data
    })
    
}

// function* fetchFavorites() {

//     try {
//         console.log('bout to fetch me some Images');

//         const response = yield axios.get('/api/favorite')
//             console.log('get response data from /api/favorite', response.data);

//             yield put({
//                 type: 'SET_FAVORITE',
//                 payload: response.data

//             })
//     }
//     catch (err) {
//         console.log('fetchBooks failed', err);
//         alert('There is something seriously wrong 🤮')

//     }
// }




const store = createStore(
    combineReducers({
        favoriteReducer,
        homeReducer
    }),
    //The logger is also stored within the store
    applyMiddleware(sagaMiddleware, logger)
)
//run the middleware 
sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

