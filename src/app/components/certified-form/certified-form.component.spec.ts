import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedFormComponent } from './certified-form.component';

describe('CertifiedFormComponent', () => {
  let component: CertifiedFormComponent;
  let fixture: ComponentFixture<CertifiedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
