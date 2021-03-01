import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PeriodoService} from '../services/periodo.service';
import {UsuarioService} from '../services/usuario.service';
import {EstadoDoPitService} from '../services/estado-do-pit.service'
import { EstadoDoPit } from '../modelos/estadoDoPit';
import {EstadoDoRadService} from '../services/estado-do-rad.service'
@Component({
  selector: 'app-tela-documentos-aprovados',
  templateUrl: './tela-documentos-aprovados.component.html',
  styleUrls: ['./tela-documentos-aprovados.component.css']
})
export class TelaDocumentosAprovadosComponent implements OnInit {

  
 email=this.usuarioService.email;
 ArrayPitsAprovados=[];
 ArrayPits=[];
 ArrayRads=[];
   constructor(public estadoDoRadService:EstadoDoRadService,public estadoDoPitService:EstadoDoPitService,public router:Router,public periodoService:PeriodoService,public usuarioService:UsuarioService) { }
 
   ngOnInit(): void {
   

     this.estadoDoPitService.getEstadoDoPit().subscribe(estado =>{
       this.ArrayPits=estado;
     });

     this.estadoDoRadService.getEstadoDoRad().subscribe(estado =>{
      this.ArrayRads=estado;
    });
    
   }

   irParaPit(ano,periodo){
 this.periodoService.ano=ano;
 this.periodoService.periodoPeriodo=periodo
 this.router.navigate([ '/ListagemPitAprovado']);
 
   }

   pegarEstadoPit(periodo){
  
    var tamanho=this.ArrayPits.length
for(var cont=0;cont<=tamanho;cont++){
    if(periodo.emailProfessor==this.ArrayPits[cont].emailProfessor && periodo.ano==this.ArrayPits[cont].ano && periodo.periodo==this.ArrayPits[cont].periodo){
        return this.ArrayPits[cont].aprovado
          
      }  

      

  }
}
  pegarEstadoRad(periodo){
    
    var tamanho=this.ArrayRads.length
for(var cont=0;cont<=tamanho;cont++){
    if(periodo.emailProfessor==this.ArrayRads[cont].emailProfessor && periodo.ano==this.ArrayRads[cont].ano && periodo.periodo==this.ArrayRads[cont].periodo){
        return this.ArrayRads[cont].aprovado
          
      }  

    

}
   
}


irParaRad(ano,periodo){
  this.periodoService.ano=ano;
  this.periodoService.periodoPeriodo=periodo;
  this.router.navigate([ '/ListagemRadAprovado']);
  
    }
}
   