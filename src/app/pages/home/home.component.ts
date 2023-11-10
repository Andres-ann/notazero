import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { User } from 'src/app/models/user.model';
import { CognitoService } from 'src/app/services/cognito.service';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
    this.cognitoService.getUser().then(() => {
      this.userName = sessionStorage.getItem('userName');
    });
    this.CrudSubjectsService.getMaterias().subscribe((materias: Subject[]) => {
      this.materias = materias;
      this.isLoading = false;
    });
  }
}
