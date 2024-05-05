import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSI1Component } from './lsi1.component';

describe('LSI1Component', () => {
  let component: LSI1Component;
  let fixture: ComponentFixture<LSI1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LSI1Component]
    });
    fixture = TestBed.createComponent(LSI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
