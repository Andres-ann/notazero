import { Component, OnInit } from '@angular/core';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css'],
})
export class EditSubjectComponent implements OnInit {
  id!: any;
  userId: string;
  materia: Subject | undefined;

  constructor(
    private CrudSubjectsService: CrudSubjectsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.CrudSubjectsService.getMateria(this.id).subscribe((res) => {
      this.materia = {
        userId: this.id,
        subjectId: res.subjectId,
        materia: res.materia,
        anio: res.anio,
        cuatrimestre: res.cuatrimestre,
        estado: res.estado,
        horario: res.horario,
        fechaPrimerParcial: res.fechaPrimerParcial,
        notaPrimerParcial: res.notaPrimerParcial,
        fechaSegundoParcial: res.fechaSegundoParcial,
        notaSegundoParcial: res.notaSegundoParcial,
        fechaRecuperatorio: res.fechaRecuperatorio,
        notaRecuperatorio: res.notaRecuperatorio,
        fechaFinal: res.fechaFinal,
        notaFinal: res.notaFinal,
        observaciones: res.observaciones,
      };
    });
  }

  onSubmit(materia: Subject) {
    this.CrudSubjectsService.updateMateria(this.id, materia).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
