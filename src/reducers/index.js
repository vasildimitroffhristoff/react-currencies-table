import { combineReducers } from 'redux';
import currenciesReducer from './currenciesReducer';

export default combineReducers({
    currencies: currenciesReducer
})
