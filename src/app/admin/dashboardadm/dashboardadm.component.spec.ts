import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadmComponent } from './dashboardadm.component';

describe('DashboardadmComponent', () => {
  let component: DashboardadmComponent;
  let fixture: ComponentFixture<DashboardadmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardadmComponent]
    });
    fixture = TestBed.createComponent(DashboardadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
