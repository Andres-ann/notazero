import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { CrudSubjectsService } from 'src/app/services/crudSubjects.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  id!: any;
  materia: Subject | undefined;

  constructor(
    private CrudSubjectsService: CrudSubjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.CrudSubjectsService.getMateria(this.id).subscribe((res: any) => {
      this.materia = res;
    });
  }

  delete() {
    if (confirm('¿Estás seguro de que queres eliminar esta materia?')) {
      this.CrudSubjectsService.deleteMateria(this.id).subscribe(
        (res: any) => {
          // Redirigir al usuario a la página de materias
          this.router.navigate(['/subjects']);
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
