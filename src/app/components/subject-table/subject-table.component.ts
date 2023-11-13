import { Component, Input } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.css'],
})
export class TableComponent {
  @Input() materias: Subject[] = [];
}
