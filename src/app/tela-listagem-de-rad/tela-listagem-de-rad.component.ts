import { Component, OnInit } from '@angular/core';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tela-listagem-de-rad',
  templateUrl: './tela-listagem-de-rad.component.html',
  styleUrls: ['./tela-listagem-de-rad.component.css']
})
export class TelaListagemDeRadComponent implements OnInit {

  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 
  constructor(public estadoDoRad:EstadoDoRadService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoRad.getEstadoDoRad().subscribe(estados =>{  
    this.ArrayEstados=estados;
  });
 

  }

  telaCorrecao(email){
    this.estadoDoRad.emailParaCorrecao=email;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email){
        this.estadoDoRad.estadoDoRadParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoRad']);
  }



}
