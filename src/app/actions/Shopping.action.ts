import { createAction, props } from '@ngrx/store';
import { ShoppingActionType } from '../types/ShoppingActionType.enum';
import { ShoppingItem } from '../models/shopping-item.models';

export const loadItemAction = createAction(ShoppingActionType.LOAD_SHOPPING);
export const loadSuccessItemAction = createAction(ShoppingActionType.LOAD_SHOPPING_SUCCESS, props<{payload: Array<ShoppingItem>}>());
export const loadFailureItemAction = createAction(ShoppingActionType.LOAD_SHOPPING_FAILURE, props<{payload: Error}>());

export const addItemAction = createAction(ShoppingActionType.ADD_ITEM, props<{payload: ShoppingItem}>());
export const addSuccessItemAction = createAction(ShoppingActionType.ADD_ITEM_SUCCESS, props<{payload: ShoppingItem}>());
export const addFailureItemAction = createAction(ShoppingActionType.ADD_ITEM_FAILURE, props<{payload: Error}>());


export const removeItemAction = createAction(ShoppingActionType.DELETE_ITEM, props<{id: string}>());
export const removeSuccessItemAction = createAction(ShoppingActionType.DELETE_ITEM_SUCCESS, props<{payload: string}>());
export const removeFailureItemAction = createAction(ShoppingActionType.DELETE_ITEM_FAILURE, props<{payload: Error}>());

