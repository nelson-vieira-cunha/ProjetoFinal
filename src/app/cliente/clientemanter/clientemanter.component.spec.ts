import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientemanterComponent } from './clientemanter.component';

describe('ClientemanterComponent', () => {
  let component: ClientemanterComponent;
  let fixture: ComponentFixture<ClientemanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientemanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientemanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
