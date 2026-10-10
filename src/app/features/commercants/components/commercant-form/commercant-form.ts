import { Component, signal } from '@angular/core';
import {
FormBuilder,
ReactiveFormsModule,
Validators,
} from '@angular/forms';

@Component({
selector: 'app-commercant-form',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './commercant-form.html',
styleUrl: './commercant-form.scss',
})

export class CommercantForm {
private readonly fb = new FormBuilder();

protected readonly submitted = signal(false);

protected readonly commercantForm = this.fb.nonNullable.group({
nom: ['', [Validators.required, Validators.maxLength(100)]],
prenom: ['', [Validators.required, Validators.maxLength(100)]],
email: ['', [Validators.required, Validators.email]],
telephone: ['', [Validators.required]],
adresse: ['', [Validators.required, Validators.maxLength(255)]],
sousDomaine: [
'',
[
Validators.required,
Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
],
],
});

protected onSubmit(): void {
this.submitted.set(true);

/*
if (this.commercantForm.invalid) {
  this.commercantForm.markAllAsTouched();
  return;
}

// Étape temporaire : aucune requête HTTP pour le moment.
console.log('Données du formulaire :', this.commercantForm.getRawValue());

*/
}
}
