import { GET_CURRENCIES, SEARCH_CURRENCY, SORT_CURRENCIES, CLEAR_SEARCH_INPUT } from '../constants';
import { findMatchingString, isNumber } from '../utilities';

const initialState = {
    currencies: [],
    searchFilter: '',
    key: 'name',
    direction: 'asc'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES: 
            return {
                ...state,
                currencies: action.payload
            }
        
        case SEARCH_CURRENCY: 
            return {
                ...state,
                searchFilter: action.payload
            }  

        case CLEAR_SEARCH_INPUT: 
            return {
                ...state,
                searchFilter: action.payload
            }      
        
        case SORT_CURRENCIES:
            return {
              ...state,
              key: action.payload.key,
              direction: action.payload.direction,
            }; 
             
        default:
            return state    
    }
}


export const searchForMatchingCurrency = (state) => {
    let rows = {};
    if (state.searchFilter.length > 0) {       
        rows.match = state.currencies.filter(currency => 
            findMatchingString(currency, state.searchFilter));
        rows.nomatch = state.currencies.filter(currency => 
            !findMatchingString(currency, state.searchFilter));
    } 
    return rows;
}

export const getSortedCurrencylist = (state) => {
    const sortedData = state.currencies.sort((a, b) => {
      const sortA = a[state.key];
      const sortB = b[state.key];

      if (isNumber(sortA) || isNumber(sortB)) {
        return state.direction === 'asc' ? sortA - sortB : sortB - sortA;
      }

      const compareA = (sortA || '').toUpperCase();
      const compareB = (sortB || '').toUpperCase();

      if (compareA < compareB) {
        return state.direction === 'asc' ? -1 : 1;
      }
      if (compareA > compareB) {
        return state.direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    return sortedData;
}

