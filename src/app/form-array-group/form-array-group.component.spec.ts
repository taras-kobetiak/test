import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayGroupComponent } from './form-array-group.component';

describe('FormArrayGroupComponent', () => {
  let component: FormArrayGroupComponent;
  let fixture: ComponentFixture<FormArrayGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
