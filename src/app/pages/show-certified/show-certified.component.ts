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

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.adminService.getAllCertificados().subscribe((data: any) => {
      if (data && data.users && data.users.length > 0) {
        const certificados = data.users.map((user) => user.certifieds).flat();

        this.certificado = certificados.find(
          (certificado) => certificado.certifiedId === this.id
        );
      }
    });
  }
}
