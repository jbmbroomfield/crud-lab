export const addRestaurant = text => ({
    type: 'ADD_RESTAURANT',
    text
})

export const deleteRestaurant = id => ({
    type: 'DELETE_RESTAURANT',
    id
})