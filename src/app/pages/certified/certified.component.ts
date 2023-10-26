import { Component, OnInit } from '@angular/core';
import { Certified } from 'src/app/models/certified.model';
import { crudCertifiedsService } from 'src/app/services/crudCertifieds.service';

@Component({
  selector: 'app-constancias',
  templateUrl: './certified.component.html',
  styleUrls: ['./certified.component.css'],
})
export class CertifiedComponent implements OnInit {
  certificados: Certified[] = [];

  constructor(private CrudCertifiedsService: crudCertifiedsService) {}

  ngOnInit(): void {
    this.CrudCertifiedsService.getCertificados().subscribe(
      (certificados: Certified[]) => {
        this.certificados = certificados;
      }
    );
  }
}
