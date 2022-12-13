import {createFeatureSelector, createSelector} from '@ngrx/store';

import {AnimalsState} from 'src/app/state/state.reducers';
import {Animal, AnimalProfile} from '../core/models';

const getState = createFeatureSelector<AnimalsState>('animals');

export const getAnimals = createSelector(getState, (state) => state.animals);
export const getProfiles = createSelector(getState, (state) => state.profiles);

export const getAnimalsProfiles = createSelector(
  getAnimals,
  getProfiles,
  (animals: Animal[], profiles: AnimalProfile[]) =>
    !!animals && !!profiles ? animals.map(animal => ({
        ...animal,
        profile: profiles.find(profile => profile.id === animal.profileId)
      })
  ) : []
  );

