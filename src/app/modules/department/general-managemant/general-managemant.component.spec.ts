import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralManagemantComponent } from './general-managemant.component';

describe('GeneralManagemantComponent', () => {
  let component: GeneralManagemantComponent;
  let fixture: ComponentFixture<GeneralManagemantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralManagemantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralManagemantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
