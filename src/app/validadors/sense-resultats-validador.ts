import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { delay, switchMap, map, catchError } from 'rxjs/operators';

import { PagamentService } from '../services/pagament.service';


export function senseResultatsValidator(paymentService: PagamentService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const terme = control.value?.trim();

    if (!terme) {
      return of(null);
    }

    return of(terme).pipe(
      delay(500),
      switchMap((text: string) => paymentService.search(text)),
      map((resultats) => resultats.length > 0 ? null : { senseResultats: true }),
      catchError(() => of({ sensResultats: true }))
    );
  };
}