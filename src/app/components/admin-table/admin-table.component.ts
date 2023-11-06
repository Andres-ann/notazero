import { Component, Input } from '@angular/core';
import { Certified } from 'src/app/models/certified.model';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent {
  @Input() certificados: Certified[] = [];
}
