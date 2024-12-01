const redux= require('redux')
const reduxlogger= require('redux-logger')
const createStore= redux.createStore;
const applyMiddleware= redux.applyMiddleware
const logger= reduxlogger.createLogger()
const BUY_CAKE= 'BUY_CAKE';
const BUY_ICECREAM= 'BUY_ICECREAM';
const combinReducers= redux.combineReducers

function buyCake(){
return {
    type: BUY_CAKE,
    info: 'first redux Action',
}
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        
    }
    }

// const initialState= {
//     numOfCake: 10,
//     numOfIcecream: 20
// }

const cakeInitialState= {
    numOfCake: 10,
   
}

const IcecreamInitialState= {
    
    numOfIcecream: 20
}

//(prevState+ action)=> newstate.

// const reducer= (state= initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE:
//           return  {
//                 ...state,
//                 numOfCake: state.numOfCake-1,
//             }
//             case BUY_ICECREAM:
//           return  {
//                 ...state,
//                 numOfIcecream: state.numOfIcecream-1,
//             }
//             default:
//                 return state
            
//     }
// }

const cakeReducer= (state= cakeInitialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
          return  {
                ...state,
                numOfCake: state.numOfCake-1,
            }
            case BUY_ICECREAM:
        
            default:
                return state
            
    }
}

const icecreamReducer= (state= IcecreamInitialState, action)=>{
    switch(action.type){
            case BUY_ICECREAM:
          return  {
                ...state,
                numOfIcecream: state.numOfIcecream-1,
            }
            default:
                return state
            
    }
}


const rooReducer= redux.combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store= createStore(rooReducer, applyMiddleware(logger));
console.log('initial State', store.getState());

 const unsubscribe= store.subscribe(()=>console.log('updated State', store.getState()));
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyIcecream());
 store.dispatch(buyIcecream());

 unsubscribe();




