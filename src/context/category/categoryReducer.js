import { ADD_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, FETCH_CATEGORIES } from '../types';

export const categoryReducer = (state, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.data,
            };

        case ADD_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: action.id,
                        title: action.title,
                    },
                ],
            };

        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.id === action.id) {
                        category.title = action.title;
                    }
                    return category;
                }),
            };

        case REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(category => category.id !== action.id),
            };

        default:
            return state;
    }
};
