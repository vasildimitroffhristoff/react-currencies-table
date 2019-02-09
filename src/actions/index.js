import { GET_CURRENCIES } from '../constants';
import api from '../api/common-currencies';

export const getCurrencies = () => ({
    type: GET_CURRENCIES,
    payload: api
})