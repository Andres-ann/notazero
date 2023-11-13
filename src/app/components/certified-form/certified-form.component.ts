import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certified } from 'src/app/models/certified.model';

@Component({
  selector: 'app-certified-form',
  templateUrl: './certified-form.component.html',
  styleUrls: ['./certified-form.component.css'],
})
export class CertifiedFormComponent {
  certificadosForm: FormGroup;
  @Input()
  modelCertificados: Certified;
  @Output()
  submitValues: EventEmitter<Certified> = new EventEmitter<Certified>();
  formValid = false;
  userName: string;

  constructor(private fb: FormBuilder) {
    this.userName = sessionStorage.getItem('userName');

    this.certificadosForm = this.fb.group({
      tipoConstancia: ['', Validators.required],
      nombre: [this.userName, Validators.required],
      dni: ['', Validators.required],
      carrera: ['', Validators.required],
      fecha: ['', Validators.required],
      asignatura: [' ', Validators.required],
      tipoExamen: [''],
      estado: ['pendiente'],
      aSerPresentadoAnte: ['', Validators.required],
    });

    this.certificadosForm.valueChanges.subscribe(() => {
      this.formValid = this.certificadosForm.valid;
    });
  }

  onSubmit(): void {
    if (this.certificadosForm.valid) {
      this.submitValues.emit(this.certificadosForm.value);
    }
  }
}
