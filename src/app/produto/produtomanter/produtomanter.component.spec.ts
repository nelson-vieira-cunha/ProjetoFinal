import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutomanterComponent } from './produtomanter.component';

describe('ProdutomanterComponent', () => {
  let component: ProdutomanterComponent;
  let fixture: ComponentFixture<ProdutomanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutomanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutomanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
