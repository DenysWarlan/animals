import {FormControl} from '@angular/forms';
import {AnimalProfile} from './animal-profile.model';

export interface Animal {
  id: number;
  name: string;
  type: AnimalType;
  profileId: number;
  profile?: AnimalProfile;
}

export enum AnimalType {
  Dog = 'dog',
  Cat = 'cat',
  Elephant = 'elephant',
  Monkey = 'monkey',
  Parrot = 'parrot',
}

export interface FormOwner {
  fullName: FormControl<string>;
  email: FormControl<string>;
  animalId: FormControl<number | null>;
}
