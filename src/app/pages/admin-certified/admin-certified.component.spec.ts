import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCertifiedComponent } from './admin-certified.component';

describe('AdminCertifiedComponent', () => {
  let component: AdminCertifiedComponent;
  let fixture: ComponentFixture<AdminCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCertifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
