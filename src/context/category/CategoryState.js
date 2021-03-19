import React, { useReducer } from 'react';
import { CategoryContext } from './categoryContext';
import { categoryReducer } from './categoryReducer';
import { ADD_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, FETCH_CATEGORIES } from '../types';
import { Http } from '../../utils/http';

export const CategoryState = ({ children }) => {
    const initialState = {
        categories: [],
    };
    const [state, dispatch] = useReducer(categoryReducer, initialState);

    const fetchCategories = async () => {
        try {
            const data = await Http.get('categories.json');
            const categories = Object.keys(data).map(key => ({
                ...data[key],
                id: key,
            }));
            dispatch({ type: FETCH_CATEGORIES, data: categories });
        } catch (err) {
            console.log(err);
        }
    };

    const addCategory = async title => {
        try {
            const data = await Http.post('categories.json', { title });
            console.log(data);
            dispatch({ type: ADD_CATEGORY, id: data.name, title });
        } catch (err) {
            console.log(err);
        }
    };

    const updateCategory = async (id, title) => {
        try {
            await Http.patch(`categories/${id}.json`, { title });
            dispatch({ type: UPDATE_CATEGORY, id, title });
        } catch (err) {
            console.log(err);
        }
    };

    const removeCategory = async id => {
        try {
            await Http.delete(`categories/${id}.json`);
            dispatch({ type: REMOVE_CATEGORY, id });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CategoryContext.Provider
            value={{
                categories: state.categories,
                addCategory,
                updateCategory,
                removeCategory,
                fetchCategories,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
