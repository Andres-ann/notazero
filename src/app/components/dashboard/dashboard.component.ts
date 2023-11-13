import { Component, OnInit } from '@angular/core';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';
import { CognitoService } from 'src/app/services/cognito.service';
import { crudCertifiedsService } from 'src/app/services/crudCertifieds.service';
import { AdminService } from 'src/app/services/admin.service';
import { Subject } from 'src/app/models/subject.model';
import { Certified } from 'src/app/models/certified.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isAdmin: string;
  materias: Subject[] = [];
  constancias: Certified[] = [];
  autorizaciones: Certified[] = [];

  constructor(
    private cognitoService: CognitoService,
    private CrudSubjectsService: CrudSubjectsService,
    private CrudCertifiedsService: crudCertifiedsService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.cognitoService.getUser().then(() => {
      this.isAdmin = sessionStorage.getItem('rol');
    });

    this.CrudSubjectsService.getMaterias().subscribe((materias: Subject[]) => {
      this.materias = materias;
    });

    this.CrudCertifiedsService.getCertificados().subscribe(
      (constancias: Certified[]) => {
        this.constancias = constancias;
      }
    );

    this.adminService.getAllCertificados().subscribe((data: any) => {
      if (data && data.users && data.users.length > 0) {
        const autorizaciones = data.users
          .map((user) => user.certifieds)
          .flat()
          .filter((autorizaciones) => autorizaciones.estado === 'pendiente');

        this.autorizaciones = autorizaciones;
      }
    });
  }
}
