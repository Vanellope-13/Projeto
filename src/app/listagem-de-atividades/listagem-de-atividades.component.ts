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
chTotalDeAulas=0;
chTotalDePreparacaoDeAulas=0;

arrayApoioAoEnsino=[];
apoioAoEnsinoToEdit: ApoioAoEnsino;
chTotalDeApoioAoEnsino=0;

ArrayPesquisa=[];
pesquisaToEdit: Pesquisa;
chTotalDePesquisa=0;
 
ArrayExtensao=[];
extensaoToEdit: Extensao;
chTotalDeExtensao=0;

ArrayAdministrativo=[];
administrativoToEdit: Administrativo;
chTotalDeAdministrativo=0;

chTotal=0;



  constructor(public  usuarioService : UsuarioService, public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, 
    public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, 
    public administrativoService:AdministrativoService,public router:Router, public estadoPit:EstadoDoPitService) { 
   
  
  }

//------------------Aqui os arrays de cada tipo de atividade recebe suas atividades específicas-----------//
  ngOnInit(){
  

    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
      this.arrayApoioAoEnsino= apoioAoEnsino;
      
      for(var cont=0;cont<=this.arrayApoioAoEnsino.length;cont++){
        if(this.arrayApoioAoEnsino[cont].emailProfessor==this.email){
        this.chTotalDeApoioAoEnsino=this.chTotalDeApoioAoEnsino + parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.arrayApoioAoEnsino[cont].chSemanal);
        }
        }
         
    });

    this.aulasService.getAulas().subscribe(aulas =>{
      this.ArrayAulas=aulas;
       
      for(var cont=0;cont<=this.ArrayAulas.length;cont++){
        if(this.ArrayAulas[cont].emailProfessor==this.email){
        this.chTotalDeAulas=this.chTotalDeAulas + parseInt(this.ArrayAulas[cont].chSemanal);
        this.chTotalDePreparacaoDeAulas=this.chTotalDePreparacaoDeAulas + parseInt(this.ArrayAulas[cont].chDePreparacao);
        this.chTotal=this.chTotal+parseInt(this.ArrayAulas[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayAulas[cont].chDePreparacao);
      }
        }
       
    });

  
    

    this.pesquisaService.getPesquisa().subscribe(pesquisa =>{
      this.ArrayPesquisa= pesquisa;
      for(var cont=0;cont<=this.ArrayPesquisa.length;cont++){
        if(this.ArrayPesquisa[cont].emailProfessor==this.email){
        this.chTotalDePesquisa=this.chTotalDePesquisa + parseInt(this.ArrayPesquisa[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayPesquisa[cont].chSemanal);
      }
        }
    });

    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
      for(var cont=0;cont<=this.ArrayExtensao.length;cont++){
        if(this.ArrayExtensao[cont].emailProfessor==this.email){
        this.chTotalDeExtensao=this.chTotalDeExtensao + parseInt(this.ArrayExtensao[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayExtensao[cont].chSemanal);
      }
        }
    });

    this.administrativoService.getAdministrativo().subscribe(administrativo =>{
      this.ArrayAdministrativo= administrativo;
      for(var cont=0;cont<=this.ArrayAdministrativo.length;cont++){
        if(this.ArrayAdministrativo[cont].emailProfessor==this.email){
        this.chTotalDeAdministrativo=this.chTotalDeAdministrativo + parseInt(this.ArrayAdministrativo[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.ArrayAdministrativo[cont].chSemanal);
      }
        }
        
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
