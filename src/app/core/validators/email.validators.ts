import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const emailValidator: () => ValidatorFn = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isValidEmail(control.value) ? {invalidNumber:true} : null
  };
};

export function isValidEmail(value: string): boolean {
  const PROWLY_EMAIL: string = '@prowly.com';
  const TAG_EMAIL: string = '+';
  return !value.endsWith(PROWLY_EMAIL) && !value.includes(TAG_EMAIL);
}

