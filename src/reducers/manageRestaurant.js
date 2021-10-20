import cuid from 'cuid';

export default function manageRestaurants(
    state = {restaurants: [], reviews: []},
    action
) {

    switch (action.type) {

        case 'ADD_RESTAURANT':
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: [...state.restaurants, newRestaurant(action.text)]
            }
        
        case 'DELETE_RESTAURANT':
            return {
                ...state,
                reviews: [...state.reviews],
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
            }

        case 'ADD_REVIEW':
            return {
                ...state,
                restaurants: [...state.restaurants],
                reviews: [...state.reviews, newReview(action.review)]
            }

        case 'DELETE_REVIEW':
            return {
                ...state,
                restaurants: [...state.restaurants],
                reviews: state.reviews.filter(review => review.id !== action.id)
            }

        default:
            return state
    }

}

const newRestaurant = text => ({
    id: cuid(),
    text: text,
})

const newReview = review => ({
    id: cuid(),
    ...review,
})