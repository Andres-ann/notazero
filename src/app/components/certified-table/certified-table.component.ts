import { Component, Input } from '@angular/core';
import { Certified } from 'src/app/models/certified.model';

@Component({
  selector: 'app-certified-table',
  templateUrl: './certified-table.component.html',
  styleUrls: ['./certified-table.component.css'],
})
export class CertifiedTableComponent {
  @Input() certificados: Certified[] = [];
}
