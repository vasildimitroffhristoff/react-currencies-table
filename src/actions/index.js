import { GET_CURRENCIES, SEARCH_ITEM } from '../constants';
import api from '../api/common-currencies';

const normalizedData = Object.keys(api).map(currency => { 
    const { name, code, decimal_digits, name_plural, symbol } = api[currency];
    return { name, code, decimal_digits, name_plural, symbol }
});

export const getCurrencies = () => ({
    type: GET_CURRENCIES,
    payload: normalizedData
})

export const searchItem = (text) => ({
    type: SEARCH_ITEM,
    payload: text
})