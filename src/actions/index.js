import api from '../api/common-currencies';

export const getCurrencies = () => ({
    type: "GET_CURRENCIES",
    payload: api
})