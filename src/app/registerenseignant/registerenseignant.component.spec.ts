import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterenseignantComponent } from './registerenseignant.component';

describe('RegisterenseignantComponent', () => {
  let component: RegisterenseignantComponent;
  let fixture: ComponentFixture<RegisterenseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterenseignantComponent]
    });
    fixture = TestBed.createComponent(RegisterenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
