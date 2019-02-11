import { combineReducers } from 'redux';
import currenciesReducer, * as fromCurrencies from './currenciesReducer';

export default combineReducers({
    currencies: currenciesReducer
})

export const searchForMatchingCurrency = (state) =>  
    fromCurrencies.searchForMatchingCurrency(state.currencies);
export const getSortedCurrencylist = (state) => 
    fromCurrencies.getSortedCurrencylist(state.currencies);