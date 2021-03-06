import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoRadService} from '../services/estado-do-rad.service'
@Component({
  selector: 'app-tela-selecao-do-pit-para-rad',
  templateUrl: './tela-selecao-do-pit-para-rad.component.html',
  styleUrls: ['./tela-selecao-do-pit-para-rad.component.css']
})
export class TelaSelecaoDoPitParaRadComponent implements OnInit {
  periodoNaoExistente
  email=this.usuarioService.email;
  
  ArrayEstados=[];

    constructor(public estadoDoRadService:EstadoDoRadService,public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
  
    ngOnInit(): void {

      this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{  

        this.ArrayEstados=estado;
       
      });
    }

  
    irParaRad(ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo
  this.router.navigate([ '/telaRad']);
  
    }

    pegarEstado(estado){
   
      if(estado.aprovadoDirecaoDeEnsino==true && estado.aprovadoGeral==true && 
        estado.aprovadoExtensao==true && estado.aprovadoPesquisa==true){
        return true
  
  }else{
    return false
  }
      }
  
     
    }