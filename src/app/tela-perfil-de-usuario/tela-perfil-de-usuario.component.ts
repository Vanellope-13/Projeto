import { Component, OnInit } from '@angular/core';
import {Usuario} from '../modelos/Usuario';
import {UsuarioService} from '../services/usuario.service';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { TelaLoginComponent } from '../tela-login/tela-login.component';
@Component({
  selector: 'app-tela-perfil-de-usuario',
  templateUrl: './tela-perfil-de-usuario.component.html',
  styleUrls: ['./tela-perfil-de-usuario.component.css']
})
export class TelaPerfilDeUsuarioComponent implements OnInit {

  constructor(public UsuarioService:UsuarioService) { 
    
  }

  ngOnInit() {
   
   
  }
 

  
}
