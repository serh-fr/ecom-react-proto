export const increment = value => {
    return +value + 1
}

export const decrement = value => {
    if(value <= 1) return 1

    return +value - 1
}