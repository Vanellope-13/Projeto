import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import {AtividadesService} from '../services/atividades.service';
import { Atividade } from '../modelos/atividade';
import { Aulas } from '../modelos/aulas';
import { AulasService } from '../services/aulas.service';
@Component({
  selector: 'app-tela-pit',
  templateUrl: './tela-pit.component.html',
  styleUrls: ['./tela-pit.component.css']
})
export class TelaPitComponent implements OnInit {
//---------------------------Nome do professor---------------------------------- //
  nomeDeUsuario=this.usuarioService.nome;
  email=this.usuarioService.email;

  aulas:Aulas={
    chDePreparacao:0,
    chSemanal:0,
    chTotaldoComponente:0,
    componenteCurricular:'',
    curso:'',
    emailProfessor:this.email
  }
 
  nomeApoio;
  chApoio;

  nomePesquisa;
  chPesquisa;

  nomeExtensao;
  chExtensao;

  nomeAdministrativo;
  chAdministrativo;

  atividades:Atividade[];
  posicao=0;


  editState:boolean =false;
  ArrayAulas=[];
  aulaToEdit: Aulas;
  
  
   
  constructor(public  usuarioService : UsuarioService, public atividadesService:AtividadesService,public aulasService:AulasService) { 
  
  }
 

  ngOnInit(): void {
    this.direcionamentoDeAtividades();


    this.aulasService.getAulas().subscribe(aulas =>{
      //console.log(atividades);
      this.ArrayAulas=aulas;
    });
}
onSubmitAulas(){
  this.aulas.emailProfessor=this.email;
  this.aulasService.addAula(this.aulas);
  this.aulas.chDePreparacao=0;
  this.aulas.chSemanal=0;
  this.aulas.chTotaldoComponente=0;
  this.aulas.componenteCurricular='';
  this.aulas.curso='';
  this.aulas.emailProfessor='';
 
}
  
deleteAtividade( event, atividade :Aulas){
  this.clearState();
  this.aulasService.deleteAula(atividade);
}
editAula( event, aula:Aulas){
this.editState=true;
this.aulaToEdit=aula;
}
clearState(){
this.editState=false;
this.aulaToEdit=null;
}
updateAula(aula:Aulas){
this.aulasService.updateAula(aula);
this.clearState();
}






















//------Direcionamentos:Eles pegam o array de atividades e distribuem de acordo com o tipo dela------------------------//
ArrayAtivDeApoioAoEnsino=[];
  ArrayAtivDePesquisa=[];
  ArrayAtivDeExtensao=[];
  ArrayAtivAdministrativo=[];

direcionamentoDeAtividades(){
    this.atividadesService.getAtividades().subscribe(atividades =>{
    
      this.atividades=atividades;

   for(var cont=0;cont<=this.atividades.length;cont++){
   
  if(this.atividades[cont].tipo=="Atividades de apoio ao ensino"){
      this.ArrayAtivDeApoioAoEnsino.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades de pesquisa e pós-graduação"){
    this.ArrayAtivDePesquisa.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades de extensão"){
  this.ArrayAtivDeExtensao.push(this.atividades[cont]);   
  }if(this.atividades[cont].tipo=="Atividades administrativo-pedagógicas"){
  this.ArrayAtivAdministrativo.push(this.atividades[cont]);   
}
    }
  });
}

preencheChApoio(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.nomeApoio){
this.chApoio=atividades[cont].ch;
}
}
    });


}


preencheChPesquisa(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.nomePesquisa){
this.chPesquisa=atividades[cont].ch;
}
}
    });


}


preencheChExtensao(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.nomeExtensao){
this.chExtensao=atividades[cont].ch;
}
}
    });


}


preencheChAdministrativo(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.nomeAdministrativo){
this.chAdministrativo=atividades[cont].ch;
}
}
    });


}
}
