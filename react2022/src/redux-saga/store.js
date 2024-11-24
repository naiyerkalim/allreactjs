
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga';

const sagamiddleware= createSagaMiddleware();
const store= configureStore({
    reducer: rootReducer,   
    //applyMiddleware(sagamiddleware)
    miidleware: ()=>[sagamiddleware]
    
});
try {
    sagamiddleware.run(productSaga) 
} catch (error) {
    
}
export default store;