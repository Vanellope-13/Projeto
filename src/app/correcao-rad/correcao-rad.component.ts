import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../services/usuario.service';
import {EstadoDoRadService} from '../services/estado-do-rad.service';
import {AtividadesService} from '../services/atividades.service';


import {Comentario} from '../modelos/comentario';
import {ComentariosService} from '../services/comentarios.service';
import { Router } from '@angular/router';


import { AulasService } from '../services/aulas.service';
import { ApoioAoEnsinoService } from '../services/apoio-ao-ensino.service';
import { PesquisaService } from '../services/pesquisa.service';
import { ExtensaoService } from '../services/extensao.service';
import { AdministrativoService } from '../services/administrativo.service';
@Component({
  selector: 'app-correcao-rad',
  templateUrl: './correcao-rad.component.html',
  styleUrls: ['./correcao-rad.component.css']
})
export class CorrecaoRadComponent implements OnInit {

  email=this.estadoDoRadService.emailParaCorrecao;
  estado=this.estadoDoRadService.estadoDoRadParaCorrecao;
    ArrayEstados=[];
    ArrayApoioAoEnsino=[];
    ArrayAulas=[];
    ArrayPesquisa=[];
    ArrayExtensao=[];
    ArrayAdministrativo=[];
  
  
    comentario:Comentario={
      comentario:'',
      emailProfessor:this.email
    }
  
    constructor(public comentariosService:ComentariosService,public estadoDoRadService:EstadoDoRadService,
      public  usuarioService : UsuarioService,public router:Router,public atividadesService:AtividadesService,
      public aulasService:AulasService, public apoioAoEnsinoService:ApoioAoEnsinoService, public pesquisaService:PesquisaService, public extensaoService:ExtensaoService, public administrativoService:AdministrativoService) { }
  
    ngOnInit(): void {
    this.apoioAoEnsinoService.getApoioAoEnsino().subscribe(apoio =>{  
      this.ArrayApoioAoEnsino=apoio;
    });
  
      this.aulasService.getAulas().subscribe(aulas =>{  
        this.ArrayAulas=aulas;
      });
  
  
      this.pesquisaService.getPesquisa().subscribe(pesquisa =>{
        this.ArrayPesquisa=pesquisa ;
      });
  
      this.extensaoService.getExtensao().subscribe(extensao =>{
        this.ArrayExtensao= extensao;
      });
  
      this.administrativoService.getAdministrativo().subscribe(administrativo =>{
        this.ArrayAdministrativo= administrativo;
      });
     
    
    }
  
    enviarCorrecaoParaProfessor(){
      this.comentariosService.addComentario(this.comentario);
      this.estadoDoRadService.deleteEstadoDoRad(this.estado);
      this.router.navigate([ '/listagemDeRad']);
    }
    

}
