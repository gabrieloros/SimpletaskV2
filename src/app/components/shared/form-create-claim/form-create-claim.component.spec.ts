import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateClaimComponent } from './form-create-claim.component';

describe('FormCreateClaimComponent', () => {
  let component: FormCreateClaimComponent;
  let fixture: ComponentFixture<FormCreateClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreateClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
