import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service';
import {AtividadesService} from '../services/atividades.service';


import {Comentario} from '../modelos/comentario';
import {ComentariosService} from '../services/comentarios.service';
import { Router } from '@angular/router';


import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';

import { ApoioAoEnsino } from '../modelos/apoioAoEnsino';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';

import { Pesquisa } from '../modelos/pesquisa';
import { PesquisaService } from '../services/pesquisa.service';

import { Extensao } from '../modelos/extensao';
import { ExtensaoService } from '../services/extensao.service';
import{PeriodoService} from '../services/periodo.service'
import { Administrativo } from '../modelos/administrativo';
import { AdministrativoService } from '../services/administrativo.service';

@Component({
  selector: 'app-correcao-pit',
  templateUrl: './correcao-pit.component.html',
  styleUrls: ['./correcao-pit.component.css']
})
export class CorrecaoPitComponent implements OnInit {
email=this.estadoDoPitService.emailParaCorrecao;
estado=this.estadoDoPitService.estadoDoPitParaCorrecao;
 
periodo=this.periodoService.periodoPeriodo;
ano=this.periodoService.ano;

anoAulas=this.periodoService.ano;
anoApoioAoEnsino=this.periodoService.ano;
anoPesquisa=this.periodoService.ano;
anoExtensao=this.periodoService.ano;
anoAdministrativo=this.periodoService.ano;

periodoAulas=this.periodoService.periodoPeriodo;
periodoApoioAoEnsino=this.periodoService.periodoPeriodo;
periodoPesquisa=this.periodoService.periodoPeriodo;
periodoExtensao=this.periodoService.periodoPeriodo;
periodoAdministrativo=this.periodoService.periodoPeriodo;


editState:boolean =false;
ArrayAulas=[];
aulaToEdit: Aulas;
chTotalDeAulas=0;
chTotalDePreparacaoDeAulas=0;

ArrayApoioAoEnsino=[];
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


  comentario:Comentario={
    comentario:'',
    emailProfessor:this.email,
    ano:this.periodoService.ano,
    periodo:this.periodoService.periodoPeriodo,
    documento:''
  }

  constructor(public periodoService:PeriodoService,public comentariosService:ComentariosService,public estadoDoPitService:EstadoDoPitService,
    public  usuarioService : UsuarioService,public router:Router,public atividadesService:AtividadesService,
    public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { }

  ngOnInit(): void {
  
    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoioAoEnsino =>{
      this.ArrayApoioAoEnsino=apoioAoEnsino;
  
      for(var cont=0;cont<=this.ArrayApoioAoEnsino.length;cont++){
        if(this.ArrayApoioAoEnsino[cont].emailProfessor==this.email && this.ArrayApoioAoEnsino[cont].ano==this.anoApoioAoEnsino && this.ArrayApoioAoEnsino[cont].periodo==this.periodoApoioAoEnsino){
        this.chTotalDeApoioAoEnsino=this.chTotalDeApoioAoEnsino + parseInt(this.ArrayApoioAoEnsino[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.ArrayApoioAoEnsino[cont].chSemanal);
        }
        }
         
         
    });
  
    this.aulasService.getAulas().subscribe(aulas =>{
      this.ArrayAulas=aulas;
      for(var cont=0;cont<=this.ArrayAulas.length;cont++){
        if(this.ArrayAulas[cont].emailProfessor==this.email && this.ArrayAulas[cont].ano==this.anoAulas && this.ArrayAulas[cont].periodo==this.periodoAulas){
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
        if(this.ArrayPesquisa[cont].emailProfessor==this.email && this.ArrayPesquisa[cont].ano==this.anoPesquisa && this.ArrayPesquisa[cont].periodo==this.periodoPesquisa){
        this.chTotalDePesquisa=this.chTotalDePesquisa + parseInt(this.ArrayPesquisa[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayPesquisa[cont].chSemanal);
      }
        }
    });
  
    this.extensaoService.getExtensao().subscribe(extensao =>{
      this.ArrayExtensao= extensao;
      for(var cont=0;cont<=this.ArrayExtensao.length;cont++){
        if(this.ArrayExtensao[cont].emailProfessor==this.email && this.ArrayExtensao[cont].ano==this.anoExtensao && this.ArrayExtensao[cont].periodo==this.periodoExtensao){
        this.chTotalDeExtensao=this.chTotalDeExtensao + parseInt(this.ArrayExtensao[cont].chSemanal);
        this.chTotal=this.chTotal+parseInt(this.ArrayExtensao[cont].chSemanal);
      }
        }
    });
  
    this.administrativoService.getAdministrativo().subscribe(administrativo =>{
      this.ArrayAdministrativo= administrativo;
      for(var cont=0;cont<=this.ArrayAdministrativo.length;cont++){
        if(this.ArrayAdministrativo[cont].emailProfessor==this.email && this.ArrayAdministrativo[cont].ano==this.anoAdministrativo && this.ArrayAdministrativo[cont].periodo==this.periodoAdministrativo){
        this.chTotalDeAdministrativo=this.chTotalDeAdministrativo + parseInt(this.ArrayAdministrativo[cont].chSemanal);
        this.chTotal=this.chTotal+ parseInt(this.ArrayAdministrativo[cont].chSemanal);
      }
        }
        
    });
  
  
  
  this.chTotal=this.chTotalDeAdministrativo+this.chTotalDeApoioAoEnsino+this.chTotalDeAulas+this.chTotalDeExtensao+this.chTotalDePesquisa+this.chTotalDePreparacaoDeAulas;
  
  }


  enviarCorrecaoParaProfessor(){
    this.comentario.documento='pit'
    this.comentario.ano=this.periodoService.ano;
    this.comentario.periodo=this.periodoService.periodoPeriodo;
    this.comentariosService.addComentario(this.comentario);

    this.router.navigate([ '/listagemDePit']);
  }

  valor;
  enviarValor(valor){
    this.valor=valor;
  }
 
  reenviarParaAlteracao(){
    console.log("reprovar")
    this.estadoDoPitService.deleteEstadoDoPit(this.estado)
    this.estado.enviado=false;
    this.estado.aprovado=false;
    this.estadoDoPitService.addEstadoDoPit(this.estado);

  

   
  }
  aprovar(){
console.log("aprovar")
this.estadoDoPitService.deleteEstadoDoPit(this.estado)
this.estado.enviado=false;
    this.estado.aprovado=true;
    this.estadoDoPitService.addEstadoDoPit(this.estado);

 
}
}
