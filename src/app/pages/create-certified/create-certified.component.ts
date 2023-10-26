import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { crudCertifiedsService } from 'src/app/services/crudCertifieds.service';
import { Certified } from 'src/app/models/certified.model';

@Component({
  selector: 'app-create-certified',
  templateUrl: './create-certified.component.html',
  styleUrls: ['./create-certified.component.css'],
})
export class CreateCertifiedComponent {
  constructor(
    private router: Router,
    private CrudCertifiedsService: crudCertifiedsService
  ) {}

  onSubmit(certificados: Certified) {
    this.CrudCertifiedsService.createCertificado(certificados).subscribe({
      next: () => {
        this.router.navigate(['/certifieds']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
