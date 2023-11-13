import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css'],
})
export class CreateSubjectComponent {
  constructor(
    private router: Router,
    private CrudSubjectsService: CrudSubjectsService
  ) {}

  onSubmit(materias: Subject) {
    this.CrudSubjectsService.createMateria(materias).subscribe({
      next: () => {
        this.router.navigate(['/subjects']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
