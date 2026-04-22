import { Component, effect, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { DestacatsService } from '../../services/destacats.service';
import { Pagament } from '../../models/pagament.model';

@Component({
  selector: 'destacats-panel',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './destacats-panel.component.html',
  styleUrl: './destacats-panel.component.scss'
})
export class DestacatsPanelComponent {
  public notesFormulary: FormGroup;

  public destacatsService = inject(DestacatsService);
  private readonly fb = inject(FormBuilder);

  private currentHighlightedIds: string[] = [];

  constructor() {
    this.notesFormulary = this.fb.group({
      notes: this.fb.array([])
    });

    for (let index = 0; index < this.destacatsService.totalDestacats(); index++) {
      this.onAddHighlighted();
    }

    this.currentHighlightedIds = this.destacatsService.destacats().map(highlighted => highlighted.id);

    effect(() => {
      if(this.currentHighlightedIds.length === this.destacatsService.totalDestacats()) return;
      else if(this.currentHighlightedIds.length < this.destacatsService.totalDestacats()) this.onAddHighlighted();
      else {
        const removedIdx = this.getRemovedIdx(this.destacatsService.destacats());
        this.notes.removeAt(removedIdx);
      }

      this.currentHighlightedIds = this.destacatsService.destacats().map(highlighted => highlighted.id);
    })
  }

  get notes(): FormArray {
    return this.notesFormulary.get('notes') as FormArray;
  }

  getNoteIndex(index: number) {
    return this.notes.at(index) as FormControl;
  }

  getNoteValidatorError(index: number) {
    return this.getNoteIndex(index).touched &&
           this.getNoteIndex(index).invalid;
  }

  onAddHighlighted(): void {
    this.notes.push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  addNote(payment: Pagament, paymentIdx: number): void {
    const paymentControl = this.notes.at(paymentIdx);

    paymentControl.markAsTouched();
    if (paymentControl.valid) {
      const nota = paymentControl.value;
      this.destacatsService.afegirNota(payment.id, nota);
      this.notes.at(paymentIdx).patchValue('');
    }
  }

  private getRemovedIdx(newHighlighted: Pagament[]) {
    const newHighlightedIds = newHighlighted.map(highlighted => highlighted.id);
    let idx = 0;

    while (idx < this.currentHighlightedIds.length &&
           this.currentHighlightedIds[idx] === newHighlightedIds[idx]) {
      idx++;
    }

    return idx;
  }
}
