import { Component, OnInit } from '@angular/core';
import { Certified } from 'src/app/models/certified.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-certified',
  templateUrl: './admin-certified.component.html',
  styleUrls: ['./admin-certified.component.css'],
})
export class AdminCertifiedComponent implements OnInit {
  certificados: Certified[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCertificados().subscribe((data: any) => {
      if (data && data.users && data.users.length > 0) {
        this.certificados = data.users
          .map((user) => user.certifieds)
          .flat()
          .filter((certificado) => certificado.estado === 'pendiente');
      }
    });
  }
}
