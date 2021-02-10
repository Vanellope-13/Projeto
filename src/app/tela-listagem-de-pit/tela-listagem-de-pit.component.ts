import { Component, OnInit } from '@angular/core';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import {UsuarioService} from '../services/usuario.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-listagem-de-pit',
  templateUrl: './tela-listagem-de-pit.component.html',
  styleUrls: ['./tela-listagem-de-pit.component.css']
})
export class TelaListagemDePitComponent implements OnInit {
  nomeDeUsuario=this.usuarioService.nome;
  ArrayEstados=[];
 
  constructor(public estadoDoPit:EstadoDoPitService,public usuarioService:UsuarioService, public router:Router) { }

  ngOnInit(): void {
   this.estadoDoPit.getEstadoDoPit().subscribe(estados =>{  
    this.ArrayEstados=estados;
  });
 

  }

  telaCorrecao(email){
    this.estadoDoPit.emailParaCorrecao=email;
    for(var cont=0;cont<=this.ArrayEstados.length;cont++){
      if(this.ArrayEstados[cont].emailProfessor==email){
        this.estadoDoPit.estadoDoPitParaCorrecao=this.ArrayEstados[cont];
        break;
      }
   }
    this.router.navigate([ '/correcaoPit']);
  }


}
