import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyReportsComponent } from './ready-reports.component';

describe('ReadyReportsComponent', () => {
  let component: ReadyReportsComponent;
  let fixture: ComponentFixture<ReadyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
