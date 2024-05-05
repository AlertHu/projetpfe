import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessMessageComponent } from './register-success-message.component';

describe('RegisterSuccessMessageComponent', () => {
  let component: RegisterSuccessMessageComponent;
  let fixture: ComponentFixture<RegisterSuccessMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSuccessMessageComponent]
    });
    fixture = TestBed.createComponent(RegisterSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
