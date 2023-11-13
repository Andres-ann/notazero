import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css'],
})
export class SubjectFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  userId = sessionStorage.getItem('userSub');
  formMaterias: FormGroup;
  @Input()
  modelMaterias: Subject;
  @Output()
  submitValues: EventEmitter<Subject> = new EventEmitter<Subject>();
  formValid = false;

  ngOnInit(): void {
    this.formMaterias = this.formBuilder.group({
      userId: [this.userId, Validators.required],
      materia: ['', Validators.required],
      anio: ['', Validators.required],
      cuatrimestre: ['', Validators.required],
      estado: ['', Validators.required],
      horario: [''],
      fechaPrimerParcial: [''],
      notaPrimerParcial: [''],
      fechaSegundoParcial: [''],
      notaSegundoParcial: [''],
      fechaRecuperatorio: [''],
      notaRecuperatorio: [''],
      fechaFinal: [''],
      notaFinal: [''],
      observaciones: [''],
    });
    if (this.modelMaterias !== undefined) {
      this.formMaterias.patchValue(this.modelMaterias);
    }

    this.formMaterias.valueChanges.subscribe(() => {
      this.formValid = this.formMaterias.valid;
    });
  }

  onSubmit(): void {
    if (this.formMaterias.valid) {
      this.submitValues.emit(this.formMaterias.value);
    }
  }
}
