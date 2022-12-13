import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {OwnerFormComponent} from "../pages/animals/containers/owner-form/owner-form.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: OwnerFormComponent,
      },
      {
        path: 'new',
        component: OwnerFormComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [OwnerFormComponent],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule],
})
export class LazyLoadingModule {}
