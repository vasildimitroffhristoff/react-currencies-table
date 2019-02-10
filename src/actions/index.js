import { GET_CURRENCIES, SEARCH_CURRENCY, SORT_CURRENCIES, CLEAR_SEARCH_INPUT } from '../constants';
import api from '../api/common-currencies';

const normalizedData = Object.keys(api).map(currency => { 
    const { name, code, decimal_digits, name_plural, symbol } = api[currency];
    return { name, code, decimal_digits, name_plural, symbol }
});

export const getCurrencies = () => ({
    type: GET_CURRENCIES,
    payload: normalizedData
});

export const searchItem = (text) => ({
    type: SEARCH_CURRENCY,
    payload: text
});

export const clearSearchItem = () => ({
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