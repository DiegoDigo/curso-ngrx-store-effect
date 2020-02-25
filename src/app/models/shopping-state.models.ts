import { ShoppingItem } from './shopping-item.models';

export interface ShoppingState {
    list: ShoppingItem[],
    loading: boolean,
    error: Error
}