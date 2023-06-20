import {combineReducers, createStore} from 'redux';

// create a object for the reducer function 
const initialState = {
    count: 0,
};

// the reducer func takes two paramete one is initial state and other is the action and it returns the new state
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'inc':
            return {
                //using spread operator for the state obj which has more than one property 
                ...state,
                count: state.count + 1
            };
        case 'dec':
            return{
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}

const mesState = {
    mess:''
}

const mesReducer = (state = mesState,action) =>{
    console.log("mesReducer recieve a action");
    switch(action.type){
        case 'sayhello':
            return {
                ...state,
                mess: 'hello'
            }
        default:
            return state;
            
    }
}

// combineReducers() is used for handling more than one reducer()
const rootreducer = combineReducers({
    counter: reducer,
    message: mesReducer
})

// createStore() is used for creating the centralized store
const store = createStore(rootreducer);


export default store;