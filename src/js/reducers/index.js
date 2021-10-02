// Depenedecies
import {combineReducers} from 'redux';

// Reducers
import nameReducer from './name';
import colourReducer from './colour';


const rootReducer = combineReducers({
    nameReducer,
    colourReducer
});
export default rootReducer;