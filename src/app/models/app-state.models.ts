import { ShoppingState } from './shopping-state.models';

export interface AppState {
    readonly shopping: ShoppingState
}