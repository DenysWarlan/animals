import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from 'src/app/state/state.reducers';
import { GetAnimals } from 'src/app/state/state.actions';
import { getAnimals } from 'src/app/state/state.selectors';

@Component({
  selector: 'app-animals-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Animals</h1>

    <a [routerLink]="['', 'owners', 'new']">
      <h2>Create virtual owner</h2>
    </a>

    <ul *ngFor="let animal of animals$ | async">
      <li class="animal">
        {{ animal }}
      </li>
    </ul>
  `,
})
export class AnimalsListComponent implements OnInit {
  animals$ = this.store.pipe(select(getAnimals));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GetAnimals());
  }
}
