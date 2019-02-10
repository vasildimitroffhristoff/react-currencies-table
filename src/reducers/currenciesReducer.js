import { GET_CURRENCIES, SEARCH_ITEM } from '../constants';
import { findMatchingString } from '../utilities';

const initialState = {
    currencies: [],
    filter: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES: 
            return {
                ...state,
                currencies: action.payload
            }
        case SEARCH_ITEM: 
            return {
                ...state,
                filter: action.payload
            }    
        
        default:
            return state    
    }
}


export const searchForMatchingCurrency = (state) => {
    let fields = {};
    if (state.filter.length > 0) {       
        fields.match = state.currencies.filter(currency => 
            findMatchingString(currency, state.filter));
        fields.nomatch = state.currencies.filter(currency => 
            !findMatchingString(currency, state.filter));
    } 
    return fields;
}

