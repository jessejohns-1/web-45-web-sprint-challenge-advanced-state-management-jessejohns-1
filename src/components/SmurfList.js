import React from 'react';
import Smurf from './Smurf';
//importing connect to make use of statetoprops
import {connect} from "react-redux"


 const SmurfList = (props)=> {
    const {smurf, isLoading} = props

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    //using map to add a new smurf to a new div
    return(
        <div className="listContainer">
            {smurf.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf}/>
            ))}
        </div>);
        
}

const mapStateToProps = state =>{
    return{ smurf:state.smurf,isloading: state.isloading }
}

//mapping smurf state and loading state connecting it to smurf list
export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.