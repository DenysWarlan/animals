import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Animal, FormOwner} from "../../../../core/models/animal.model";
import {select, Store} from "@ngrx/store";
import {getAnimals} from "../../../../state/state.selectors";
import {Observable, Subject} from 'rxjs';
import {GetAnimals} from "../../../../state/state.actions";
import {emailValidator} from "../../../../core/validators/email.validators";
import {ActivatedRoute} from "@angular/router";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerFormComponent implements OnInit, OnDestroy {
  public animals$: Observable<Animal[]> = this.store.pipe(select(getAnimals));
  public form: FormGroup<FormOwner>

  private subGuard$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute) { }

 public ngOnInit(): void {
    this.store.dispatch(GetAnimals());
    this.form = this.createForm();
   this.route.paramMap.pipe(takeUntil(this.subGuard$)).subscribe((prams) =>
     this.form.controls.animalId.patchValue(+prams.get('id')))
  }


  public ngOnDestroy(): void {
    this.subGuard$.next();
    this.subGuard$.complete();
  }

  public submit(): void {
    console.log(this.form.value);
  }

  private createForm(): FormGroup<FormOwner> {
    return this.fb.group<FormOwner>({
      fullName: this.fb.control(''),
      email: this.fb.control('', [emailValidator()]),
      animalId: this.fb.control(null),
    })
  }

}
