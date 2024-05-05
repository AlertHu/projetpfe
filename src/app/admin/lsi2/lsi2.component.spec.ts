import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSI2Component } from './lsi2.component';

describe('LSI2Component', () => {
  let component: LSI2Component;
  let fixture: ComponentFixture<LSI2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LSI2Component]
    });
    fixture = TestBed.createComponent(LSI2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
