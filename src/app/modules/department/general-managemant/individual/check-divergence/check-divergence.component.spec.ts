import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDivergenceComponent } from './check-divergence.component';

describe('CheckDivergenceComponent', () => {
  let component: CheckDivergenceComponent;
  let fixture: ComponentFixture<CheckDivergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDivergenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDivergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
