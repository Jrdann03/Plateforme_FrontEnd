import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSite } from './store-site';

describe('StoreSite', () => {
  let component: StoreSite;
  let fixture: ComponentFixture<StoreSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreSite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
