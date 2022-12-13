import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimalsListComponent} from "./pages/animals/containers/list/list.component";


const routes: Routes = [
  {
    path: 'animals',
    pathMatch: 'full',
    component: AnimalsListComponent,
  },
  {
    path: 'owner',
    loadChildren: () => import('./lazy-modules/lazy-loading.module').then(m => m.LazyLoadingModule)
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
