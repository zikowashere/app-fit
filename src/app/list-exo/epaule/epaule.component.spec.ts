import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpauleComponent } from './epaule.component';

describe('EpauleComponent', () => {
  let component: EpauleComponent;
  let fixture: ComponentFixture<EpauleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpauleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpauleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
