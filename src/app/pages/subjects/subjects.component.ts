import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { User } from 'src/app/models/user.model';
import { CognitoService } from 'src/app/services/cognito.service';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  materias: Subject[] = [];
  usuario: User[] = [];
  userName: string;
  isLoading: boolean = true;

  constructor(
    private CrudSubjectsService: CrudSubjectsService,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.CrudSubjectsService.getMaterias().subscribe((materias: Subject[]) => {
      this.materias = materias;
      this.isLoading = false;
    });
  }
}
