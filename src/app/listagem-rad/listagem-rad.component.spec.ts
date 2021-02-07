import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRADComponent } from './listagem-rad.component';

describe('ListagemRADComponent', () => {
  let component: ListagemRADComponent;
  let fixture: ComponentFixture<ListagemRADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemRADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemRADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
