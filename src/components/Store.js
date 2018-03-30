import { createStore } from 'redux';

const reducer = (state,action) => {
    if(action.type == 'TEST'){
        return Object.assign({},state,{test:action.payload.test});
    } else if(action.type == 'SET_UID'){
        return Object.assign({},state,{uid:action.payload.uid});
    } else if(action.type == 'SET_NAME'){
        return Object.assign({},state,{name:action.payload.name});
    } else if(action.type == 'SET_EMAIL'){
        return Object.assign({},state,{email:action.payload.email});
    } else if(action.type == 'SET_PROPIC'){
        return Object.assign({},state,{proPic:action.payload.propic});
    } else    
        return state;
}

export default createStore(reducer,{
    test:'incomplete',
    uid:'',
    name:'',
    proPic:'',
    email:''
})