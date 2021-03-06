

//imprting my actions
import {FETCH_START ,FETCH_SUCCESS,SET_ERROR  , APPLY_SMURF ,FETCH_FAIL } from './../actions';
//adding my array for smurfs and the loading boolean false/error message with empty string
export const initialState = {
    smurf:[],
    isloading: false,
    errorMessage:"",
}




//creating my reducer to have fetch, start, success, apply button, fail and error
const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            isloading: true,
            errorMessage: ''
          });
        case(FETCH_SUCCESS):
          return({
            ...state,
            smurf: action.payload,
            isloading: false
          });
          case(APPLY_SMURF):
            return ({ 
                ...state, 
                smurf:[...state.smurf, action.payload]
                
            });
        case(FETCH_FAIL):
          return({
            ...state,
                errorMessage: action.payload
          })
          case(SET_ERROR):
            return({
                ...state,
                errorMessage: action.payload
            })
        default:
          return state;
}}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.