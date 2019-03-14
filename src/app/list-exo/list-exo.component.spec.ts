import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExoComponent } from './list-exo.component';

describe('ListExoComponent', () => {
  let component: ListExoComponent;
  let fixture: ComponentFixture<ListExoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
