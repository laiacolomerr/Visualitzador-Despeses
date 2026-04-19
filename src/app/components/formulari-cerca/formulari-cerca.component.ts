import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';

import { PagamentService } from '../../services/pagament.service';
import { senseResultatsValidator } from '../../validadors/sense-resultats-validador';

@Component({
  selector: 'formulari-cerca',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent {
  public searchFormulary!: FormGroup;

  private readonly fb = inject(FormBuilder);
  private readonly pagamentService = inject(PagamentService);

  get termeControl() {
    return this.searchFormulary.get('termeCerca');
  }

  get termeInvalid(): boolean {
    const control = this.termeControl;
    return !!(control?.invalid && control?.touched);
  }

  get mostrantSpinner(): boolean {
    const control = this.termeControl;
    return !!(control?.pending && control?.touched);
  }

  get mostrarBotoNetejar(): boolean {
    const value = this.termeControl?.value ?? '';
    return value.trim().length > 0;
  }

  get mostrantValidacio(): boolean {
    return !!(this.termeControl?.pending && this.termeControl?.touched);
  }

  get missatgeError(): string {
    const control = this.termeControl;

    if (!control || !control.touched) {
      return '';
    }

    if (control.hasError('minlength')) {
      return 'Mínim 2 caràcters';
    }

    if (control.hasError('maxlength')) {
      return 'Màxim 50 caràcters';
    }

    if (control.hasError('senseResultats')) {
      return 'No hi ha resultats';
    }

    return '';
  }

  ngOnInit(): void {
    this.searchFormulary = this.fb.group({
      termeCerca: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(50)
        ],
        [
          senseResultatsValidator(this.pagamentService)
        ]
      ]
    });

    this.termeControl?.valueChanges
      .pipe(debounceTime(400))
      .subscribe((terme: string) => {
        const text = terme?.trim() ?? '';

        if (!text) {
          this.pagamentService.obtenirRecurrents();
        }
      });

    this.termeControl?.statusChanges
      .subscribe((status) => {
        const text = this.termeControl?.value?.trim() ?? '';

        if (text && status === 'VALID') {
          this.search();
        }
      });
  }

  search(): void {
    const terme = this.searchFormulary.get('termeCerca')?.value;
    this.pagamentService.cercar(terme);
  }

  clear(): void {
    this.searchFormulary.reset();
    this.pagamentService.obtenirRecurrents();
  }
}
