import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeAcessoComponent } from './tela-de-acesso.component';

describe('TelaDeAcessoComponent', () => {
  let component: TelaDeAcessoComponent;
  let fixture: ComponentFixture<TelaDeAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
