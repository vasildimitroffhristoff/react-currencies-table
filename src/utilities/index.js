export const findMatchingString = (field, string) => {
    return Object.keys(field).some(key => 
        field[key].toString().toLowerCase().includes(string.toLowerCase())
    )
}