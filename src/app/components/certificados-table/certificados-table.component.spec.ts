import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosTableComponent } from './certificados-table.component';

describe('CertificadosTableComponent', () => {
  let component: CertificadosTableComponent;
  let fixture: ComponentFixture<CertificadosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
