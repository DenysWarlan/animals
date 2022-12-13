import {RouterModule} from '@angular/router';
import {AppEffects} from './state/state.effects';
import {APP_REDUCERS} from './state/state.reducers';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AnimalsService} from './core/services/animals.service';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {LazyLoadingModule} from "./lazy-modules/lazy-loading.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {AnimalsListComponent} from "./pages/animals/containers/list/list.component";
import {AnimalComponent} from "./pages/animals/containers/animal/animal.component";

@NgModule({
  declarations: [AppComponent, AnimalsListComponent, AnimalComponent],
    imports: [CommonModule,
        HttpClientModule,
        BrowserModule,
      BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        LazyLoadingModule,
        StoreModule.forRoot(APP_REDUCERS),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        }),

    ],
  providers: [AnimalsService, AppEffects],
  bootstrap: [AppComponent],
})
export class AppModule {}
