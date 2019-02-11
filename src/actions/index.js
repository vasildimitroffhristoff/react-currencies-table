import { GET_CURRENCIES, SEARCH_CURRENCY, SORT_CURRENCIES, CLEAR_SEARCH_INPUT } from '../constants';
import api from '../api/common-currencies';
import { normalizeData } from '../utilities';

export const getCurrencies = () => ({
    type: GET_CURRENCIES,
    payload: normalizeData(api)
});

export const searchCurrency = (text) => ({
    type: SEARCH_CURRENCY,
    payload: text
});

export const clearSearchInput = () => ({
    type: CLEAR_SEARCH_INPUT,
    payload: ''
});

export const sortBy = (key, direction) => ({
    type: SORT_CURRENCIES,
    payload: {
        key,
        direction
    }
})