import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ShoppingActionType } from '../types/ShoppingActionType.enum';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ShoppingService } from '../shopping.service';
import { loadSuccessItemAction, loadFailureItemAction, addSuccessItemAction, addFailureItemAction, removeSuccessItemAction, removeFailureItemAction } from '../actions/Shopping.action';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {

    @Effect() loadShopping$ = this.actions$.pipe(
        ofType(ShoppingActionType.LOAD_SHOPPING),
        mergeMap(() => this.shoppingService.getShoppingItems().pipe(
            map(data => loadSuccessItemAction({ payload: data })),
            catchError(error => of(loadFailureItemAction({ payload: error})))
        )
        )
    );

    @Effect() AddItemShopping$ = this.actions$.pipe(
        ofType(ShoppingActionType.ADD_ITEM),
        mergeMap((data: any) => this.shoppingService.addShoppingItem(data.payload).pipe(
            map(data => addSuccessItemAction({ payload: data })),
            catchError(error => of(addFailureItemAction({ payload: error})))
        )
        )
    )

    @Effect() RemoveItemShopping$ = this.actions$.pipe(
        ofType(ShoppingActionType.DELETE_ITEM),
        mergeMap((data: any) => this.shoppingService.deleteShoppingItem(data.payload).pipe(
            map((data: string) => removeSuccessItemAction({ payload: data })),
            catchError(error => of(removeFailureItemAction({ payload: error})))
        )
        )
    )

    constructor(private actions$: Actions, private shoppingService: ShoppingService) { }

}