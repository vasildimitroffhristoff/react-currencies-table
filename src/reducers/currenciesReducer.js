import { GET_CURRENCIES } from '../constants';

const initialState = {
    currencies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CURRENCIES: 
            return {
                ...state,
                currencies: action.payload
            }

        default:
            return state    
    }
    
}