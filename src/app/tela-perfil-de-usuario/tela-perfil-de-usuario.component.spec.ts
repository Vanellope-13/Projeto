import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPerfilDeUsuarioComponent } from './tela-perfil-de-usuario.component';

describe('TelaPerfilDeUsuarioComponent', () => {
  let component: TelaPerfilDeUsuarioComponent;
  let fixture: ComponentFixture<TelaPerfilDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPerfilDeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPerfilDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
