import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certified } from 'src/app/models/certified.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-show-certified',
  templateUrl: './show-certified.component.html',
  styleUrls: ['./show-certified.component.css'],
})
export class ShowCertifiedComponent implements OnInit {
  id!: string;
  certificado: Certified | undefined;
  newEstado: string = '';
  userId: string = '';

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.adminService.getAllCertificados().subscribe((data: any) => {
      if (data && data.users && data.users.length > 0) {
        const user = data.users.find((user) =>
          user.certifieds.some(
            (certificado) => certificado.certifiedId === this.id
          )
        );
        if (user) {
          this.userId = user.userId;
          const certificados = user.certifieds;

          this.certificado = certificados.find(
            (certificado) => certificado.certifiedId === this.id
          );
        }
      }
    });
  }

  changeState(newState: string) {
    if (this.certificado) {
      this.certificado.estado = newState;
      this.adminService
        .updateCertificado(this.userId, this.id, this.certificado)
        .subscribe({
          next: () => {
            this.router.navigate(['/admin-certified']);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
