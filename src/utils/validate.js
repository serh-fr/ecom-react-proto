export const required = value => {
    if(value) return undefined

    return 'Field is required'
}

export const isNumber = value => {
    if(!isNaN(value) && isFinite(value)) return undefined

    return 'Value must be a number'
}