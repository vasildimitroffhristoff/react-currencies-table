export const findMatchingString = (field, searchString) => {
    return Object.keys(field).some(key => 
        field[key].toString().toLowerCase().includes(searchString.toLowerCase())
    )
};

export const sortBy = (key) => {
    return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
};

export const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

export const normalizeData = (data) => {
    return Object.keys(data).map(currencyItem => { 
        const { name, code, decimal_digits, name_plural, symbol } = data[currencyItem];
        return { name, code, decimal_digits, name_plural, symbol }
    });  
}