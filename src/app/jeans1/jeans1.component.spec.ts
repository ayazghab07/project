import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jeans1Component } from './jeans1.component';

describe('Jeans1Component', () => {
  let component: Jeans1Component;
  let fixture: ComponentFixture<Jeans1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jeans1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jeans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
