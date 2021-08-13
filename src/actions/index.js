import axios from 'axios';

//trying to thunk real hard about this axios. sorry for the pun
//creating a axios function to fetch smurf using my fetch start success fail at the bottom
export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
            .then(res => {

                dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    })
}
//setting up my action exports
export const FETCH_START = 'FETCH_START';
export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = quote => {
    return({type: FETCH_SUCCESS, payload: quote});
}

export const FETCH_FAIL = 'FETCH_FAIL';
export const fetchFail = error => {
    return({type: FETCH_FAIL, payload: error});
}

export const APPLY_SMURF = 'APPLY_SMURF';
export const applySmurf = smurf => {
    return({type: APPLY_SMURF, payload: smurf});
}

export const SET_ERROR  = 'SET_ERROR';
export const setError = error => {
    return({type: SET_ERROR , payload: error});
}