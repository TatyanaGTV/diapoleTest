import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointCounterComponent } from './point-counter.component';

describe('PointCounterComponent', () => {
  let component: PointCounterComponent;
  let fixture: ComponentFixture<PointCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
