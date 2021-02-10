import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { environment } from '../environments/environment';

import {UsuarioService} from './services/usuario.service';
import {AtividadesService} from './services/atividades.service';
import {AulasService} from './services/aulas.service';
import {ApoioAoEnsinoService} from './services/apoio-ao-ensino.service';
import {PesquisaService} from './services/pesquisa.service';
import {ExtensaoService} from './services/extensao.service';
import {AdministrativoService} from './services/administrativo.service';
import {ComentariosService} from './services/comentarios.service'
import {EstadoDoRadService} from './services/estado-do-rad.service'
import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import {AvisosService} from './services/avisos.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
import { ListagemDeAtividadesComponent } from './listagem-de-atividades/listagem-de-atividades.component';
import { FinalizacaoDeEnvioComponent } from './finalizacao-de-envio/finalizacao-de-envio.component';
import { ListagemRADComponent } from './listagem-rad/listagem-rad.component';
import { EstadoDoPitService } from './services/estado-do-pit.service';
import { TelaListagemDePitComponent } from './tela-listagem-de-pit/tela-listagem-de-pit.component';
import { CorrecaoPitComponent } from './correcao-pit/correcao-pit.component';
import { ComentariosPitComponent } from './comentarios-pit/comentarios-pit.component';
import { TelaListagemDeRadComponent } from './tela-listagem-de-rad/tela-listagem-de-rad.component';
import { CorrecaoRadComponent } from './correcao-rad/correcao-rad.component';
import { ComentariosRadComponent } from './comentarios-rad/comentarios-rad.component';
import { QuadroDeAvisosComponent } from './quadro-de-avisos/quadro-de-avisos.component';
import { EditorQuadroDeAvisosComponent } from './editor-quadro-de-avisos/editor-quadro-de-avisos.component';
const routes: Routes = [
  {path : 'editorQuadroDeAvisos', component :  EditorQuadroDeAvisosComponent },
  {path : 'quadroDeAvisos', component :  QuadroDeAvisosComponent },
  {path : 'comentariosRad', component :  ComentariosRadComponent },
  {path : 'correcaoRad', component :  CorrecaoRadComponent },
  {path : 'listagemDeRad', component :  TelaListagemDeRadComponent },
  {path : 'comentariosPit', component :  ComentariosPitComponent },
  {path : 'correcaoPit', component :  CorrecaoPitComponent },
   {path : 'listagemDePit', component :  TelaListagemDePitComponent },
  {path : 'finalizacaoRAD', component :  ListagemRADComponent },
  {path : 'finalizacao', component :  FinalizacaoDeEnvioComponent },
  {path : 'listagemC', component :  ListagemDeAtividadesComponent},
  {path : 'telaAtividades', component :TelaAtividadesComponent},
  {path : 'telaRad', component :TelaRadComponent},
  {path : 'telaPit', component :TelaPitComponent},
  {path : 'navbarC', component : NavbarComponent},
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaSobreNosComponent,
      NavbarComponent,
    TelaPitComponent,
    TelaRadComponent,
    TelaAtividadesComponent,
    ListagemDeAtividadesComponent,
    FinalizacaoDeEnvioComponent,
    ListagemRADComponent,
    TelaListagemDePitComponent,
    CorrecaoPitComponent,
    ComentariosPitComponent,
    TelaListagemDeRadComponent,
    CorrecaoRadComponent,
    ComentariosRadComponent,
    QuadroDeAvisosComponent,
    EditorQuadroDeAvisosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    AngularFireModule.initializeApp(environment.firebase ,'angularfs'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
   
  ],
  providers: [UsuarioService, AtividadesService,AulasService,ApoioAoEnsinoService,PesquisaService,ExtensaoService,AdministrativoService,EstadoDoPitService,ComentariosService,EstadoDoRadService,AvisosService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
