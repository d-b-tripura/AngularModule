import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanterServiceComponent } from './planter-service.component';

describe('PlanterServiceComponent', () => {
  let component: PlanterServiceComponent;
  let fixture: ComponentFixture<PlanterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
