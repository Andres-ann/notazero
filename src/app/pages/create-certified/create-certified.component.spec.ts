import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCertifiedComponent } from './create-certified.component';

describe('CreateCertifiedComponent', () => {
  let component: CreateCertifiedComponent;
  let fixture: ComponentFixture<CreateCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCertifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
