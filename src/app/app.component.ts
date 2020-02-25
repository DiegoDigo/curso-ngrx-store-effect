import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Store, State } from '@ngrx/store';
import { AppState } from './models/app-state.models';
import { Observable } from 'rxjs';
import { ShoppingItem } from './models/shopping-item.models';
import { addItemAction, removeItemAction, loadItemAction } from './actions/Shopping.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngrx-shopping-list';
  public shoppingItems: Observable<Array<ShoppingItem>>;
  public loading$: Observable<boolean>;
  public error$: Observable<Error>;
  public newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.shoppingItems = this.store.select(state => state.shopping.list);
    this.loading$ = this.store.select(state => state.shopping.loading);
    this.error$ = this.store.select(state => state.shopping.error);
    this.store.dispatch(loadItemAction());
  }

  addItem = () => {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(addItemAction({ payload: this.newShoppingItem }));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem = (id: string) => {
    this.store.dispatch(removeItemAction({ id }))
  }
}
