import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidapidataComponent } from './covidapidata.component';

describe('CovidapidataComponent', () => {
  let component: CovidapidataComponent;
  let fixture: ComponentFixture<CovidapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidapidataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
