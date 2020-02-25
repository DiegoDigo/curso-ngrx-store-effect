import { ShoppingItem } from "../models/shopping-item.models";
import { createReducer, on } from '@ngrx/store';
import { addItemAction, removeItemAction, loadItemAction, loadSuccessItemAction, loadFailureItemAction, addSuccessItemAction, addFailureItemAction, removeSuccessItemAction, removeFailureItemAction } from '../actions/Shopping.action';
import { ShoppingState } from '../models/shopping-state.models';

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
};

const _ShoppingReducer = createReducer(
    initialState,
    on(loadItemAction, state => ({ ...state, loading: true })),
    on(loadSuccessItemAction, (state, { payload }) => ({ ...state, list: payload, loading: false })),
    on(loadFailureItemAction, (state, { payload }) => ({ ...state, error: payload, loading: false })),

    on(addItemAction, state => ({ ...state, loading: true })),
    on(addSuccessItemAction, (state, { payload }) => ({ ...state, list: [...state.list, payload], loading: false })),
    on(addFailureItemAction, (state, { payload }) => ({ ...state, error: payload, loading: false })),

    on(removeItemAction, state => ({ ...state, loading: true })),
    on(removeSuccessItemAction, (state, { payload }) => ({ ...state, list: state.list.filter(item => item.id !== payload), loading: false })),
    on(removeFailureItemAction, (state, { payload }) => ({ ...state, error: payload, loading: false })),
)

export function ShoppingReducer(state: ShoppingState, actions) {
    return _ShoppingReducer(state, actions)
}