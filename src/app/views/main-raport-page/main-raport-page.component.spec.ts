import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRaportPageComponent } from './main-raport-page.component';

describe('MainRaportPageComponent', () => {
  let component: MainRaportPageComponent;
  let fixture: ComponentFixture<MainRaportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRaportPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRaportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
