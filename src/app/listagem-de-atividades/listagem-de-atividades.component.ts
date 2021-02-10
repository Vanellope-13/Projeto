import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import{EstadoDoPitService} from '../services/estado-do-pit.service';
import {EstadoDoPit} from '../modelos/estadoDoPit'
import {AtividadesService} from '../services/atividades.service';
import { Atividade } from '../modelos/atividade';
import { Router } from '@angular/router';

import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';

import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';

import { Pesquisa } from '../modelos/pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

import { Extensao } from '../modelos/extensao';
import { ExtensaoService } from '../services/extensao.service';

import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';
@Component({
  selector: 'app-listagem-de-atividades',
  templateUrl: './listagem-de-atividades.component.html',
  styleUrls: ['./listagem-de-atividades.component.css']
})
export class ListagemDeAtividadesComponent implements OnInit {

   
  //---------------------------Nome do professor---------------------------------- //
  nomeDeUsuario=this.usuarioService.nome;
  nomeCoordenador=this.usuarioService.nomeCoordenador;
  email=this.usuarioService.email;


  //------------------Objetos para cadastro das atividades----------------------------//
  aulas:Aulas={
    chDePreparacao:0,
    chSemanal:0,
    chTotaldoComponente:0,
    componenteCurricular:'',
    curso:'',
    emailProfessor:this.email
  }
 
  apoioAoEnsino:ApoioAoEnsino={
    atividade:'',
    lhp:'',
    chSemanal:0,
    emailProfessor:this.email
  }


  pesquisa:Pesquisa={
    atividade:'',
    chSemanal:0,
    emailProfessor:this.email
  }

  extensao:Extensao={
    projeto:'',
    chSemanal:0,
    inicio:'',
    termino:'',
    participacao:'',
    emailProfessor:this.email
  }

  administrativo:Administrativo={
    atividade:'',
    chSemanal:0,
    inicio:'',
    termino:'',
    portaria:'',
    emailProfessor:this.email
  }

  estado:EstadoDoPit={
    enviado:true,
    emailProfessor:this.email
  }
//------------------------Arrays e objetos para utilização do CRUD------------------------------//



editState:boolean =false;
ArrayAulas=[];
aulaToEdit: Aulas;
chTotalDeAulas;
chTotalDePreparacaoDeAulas;

arrayApoioAoEnsino=[];
apoioAoEnsinoToEdit: ApoioAoEnsino;
chTotalDeApoioAoEnsino;

ArrayPesquisa=[];
pesquisaToEdit: Pesquisa;
chTotalDePesquisa;
 
ArrayExtensao=[];
extensaoToEdit: Extensao;
chTotalDeExtensao;

ArrayAdministrativo=[];
administrativoToEdit: Administrativo;
chTotalDeAdministrativo;





  constructor(public  usuarioService : UsuarioService, public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, 
    public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, 
    public administrativoService:AdministrativoService,public router:Router, public estadoPit:EstadoDoPitService) { 
   
  
  }

//------------------Aqui os arrays de cada tipo de atividade recebe suas atividades específicas-----------//
  ngOnInit(){
  

    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
      this.arrayApoioAoEnsino= apoioAoEnsino;
      
    
         
    });

    this.aulasService.getAulas().subscribe(aulas =>{
      this.ArrayAulas=aulas;
       
      for(var cont=0;cont<=this.ArrayAulas.length;cont++){
        if(this.ArrayAulas[cont].emailProfessor==this.email){
        this.chTotalDeAulas+=this.ArrayAulas[cont].chSemanal;
        }
        }
    });

  
    

    this.pesquisaService.getPesquisa().subscribe(pesquisa =>{
      this.ArrayPesquisa= pesquisa;
    });

    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
    });

    this.administrativoService.getAdministrativo().subscribe(administrativo =>{
      this.ArrayAdministrativo= administrativo;
    });
}
telaPit(){
  this.router.navigate([ '/telaPit']);
}
enviarParaAnalise(){
  this.estadoPit.addEstadoDoPit(this.estado);
  this.router.navigate([ '/finalizacao']);
}

}
