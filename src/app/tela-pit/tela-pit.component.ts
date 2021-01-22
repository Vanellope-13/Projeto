import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import {AtividadesService} from '../services/atividades.service';
import { Atividade } from '../modelos/atividade';
@Component({
  selector: 'app-tela-pit',
  templateUrl: './tela-pit.component.html',
  styleUrls: ['./tela-pit.component.css']
})
export class TelaPitComponent implements OnInit {
  
  atividadeApoio;
  chApoio;

  atividadePesquisa;
  chPesquisa;

  atividadeExtensao;
  chExtensao;

  atividadeAdministrativo;
  chAdministrativo;

  atividades:Atividade[];
  ArrayAtivDeApoioAoEnsino=[];
  ArrayAtivDePesquisa=[];
  ArrayAtivDeExtensao=[];
  ArrayAtivAdministrativo=[];
   posicao=0;
  constructor(public  usuarioService : UsuarioService, public atividadesService:AtividadesService) { 
  
  }
  nomeDeUsuario=this.usuarioService.nome;

  ngOnInit(): void {
    this.direcionamentoDeAtividades();
}

  

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
if(this.atividades[cont].nome==this.atividadeApoio){
this.chApoio=atividades[cont].ch;
}
}
    });


}


preencheChPesquisa(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.atividadePesquisa){
this.chPesquisa=atividades[cont].ch;
}
}
    });


}


preencheChExtensao(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.atividadeExtensao){
this.chExtensao=atividades[cont].ch;
}
}
    });


}


preencheChAdministrativo(){
  this.atividadesService.getAtividades().subscribe(atividades =>{
    
    this.atividades=atividades;
    
    for(var cont=0;cont<=this.atividades.length;cont++){
if(this.atividades[cont].nome==this.atividadeAdministrativo){
this.chAdministrativo=atividades[cont].ch;
}
}
    });


}
}
