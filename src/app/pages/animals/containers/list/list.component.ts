import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {State} from 'src/app/state/state.reducers';
import {GetAnimals} from 'src/app/state/state.actions';
import {getAnimalsProfiles} from 'src/app/state/state.selectors';
import {Animal} from "../../../../core/models";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals-list',
  styleUrls: ['./list.component.scss'],
  template: `
    <h1>Animals</h1>

    <a  (click)="navigateToForm()">
      <h2>Create virtual owner</h2>
    </a>

    <ul *ngFor="let animal of animals$ | async">
      <li  class="animal">
        <a (click)="navigateToForm(animal.id)">
          <app-animal [animal]="animal"></app-animal>
        </a>
      </li>
    </ul>
  `,
})
export class AnimalsListComponent implements OnInit {
  public animals$: Observable<Animal[]> = this.store.pipe(select(getAnimalsProfiles));

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(GetAnimals());
  }

  public navigateToForm(id?: number): void {
    const link = id? `owner/${id}` : 'owner/new';

    console.log(id)
    console.log(link)

    this.router.navigate([link])
  }
}
