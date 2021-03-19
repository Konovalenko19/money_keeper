import { ADD_TRANSACTION, UPDATE_TRANSACTION, REMOVE_TRANSACTION } from '../types';

export const transactionReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    {
                        id: new Date().getTime(),
                        typeId: action.typeId,
                        comment: action.comment,
                    },
                ],
            };

        case UPDATE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.map(transaction => {
                    if (transaction.id === action.id) {
                        transaction.typeId = action.typeId;
                        transaction.comment = action.comment;
                    }
                    return transaction;
                }),
            };

        case REMOVE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.id),
            };

        default:
            return state;
    }
};
