import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSI3Component } from './lsi3.component';

describe('LSI3Component', () => {
  let component: LSI3Component;
  let fixture: ComponentFixture<LSI3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LSI3Component]
    });
    fixture = TestBed.createComponent(LSI3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
