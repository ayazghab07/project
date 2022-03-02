import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans2Component } from './jeans2.component';

describe('Jeans2Component', () => {
  let component: Jeans2Component;
  let fixture: ComponentFixture<Jeans2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jeans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
