import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCertifiedComponent } from './show-certified.component';

describe('ShowCertifiedComponent', () => {
  let component: ShowCertifiedComponent;
  let fixture: ComponentFixture<ShowCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCertifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
