import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercantForm } from './commercant-form';

describe('CommercantForm', () => {
  let component: CommercantForm;
  let fixture: ComponentFixture<CommercantForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercantForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercantForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
