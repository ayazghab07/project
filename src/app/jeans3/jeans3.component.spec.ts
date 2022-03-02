import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans3Component } from './jeans3.component';

describe('Jeans3Component', () => {
  let component: Jeans3Component;
  let fixture: ComponentFixture<Jeans3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jeans3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
