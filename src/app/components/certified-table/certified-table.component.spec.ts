import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedTableComponent } from './certified-table.component';

describe('CertificadosTableComponent', () => {
  let component: CertifiedTableComponent;
  let fixture: ComponentFixture<CertifiedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertifiedTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CertifiedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
