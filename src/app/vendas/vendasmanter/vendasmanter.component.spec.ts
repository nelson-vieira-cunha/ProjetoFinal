import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasmanterComponent } from './vendasmanter.component';

describe('VendasmanterComponent', () => {
  let component: VendasmanterComponent;
  let fixture: ComponentFixture<VendasmanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasmanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasmanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
