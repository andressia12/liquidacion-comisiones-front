import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionDashboard } from './transaccion-dashboard';

describe('TransaccionDashboard', () => {
  let component: TransaccionDashboard;
  let fixture: ComponentFixture<TransaccionDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
