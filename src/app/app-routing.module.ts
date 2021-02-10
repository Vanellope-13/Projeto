import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';


import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import { TelaPerfilDeUsuarioComponent } from './tela-perfil-de-usuario/tela-perfil-de-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
import { ListagemDeAtividadesComponent } from './listagem-de-atividades/listagem-de-atividades.component';
import { FinalizacaoDeEnvioComponent } from './finalizacao-de-envio/finalizacao-de-envio.component';
import { ListagemRADComponent } from './listagem-rad/listagem-rad.component';
import { TelaListagemDePitComponent } from './tela-listagem-de-pit/tela-listagem-de-pit.component';
import { CorrecaoPitComponent } from './correcao-pit/correcao-pit.component';
import { ComentariosPitComponent } from './comentarios-pit/comentarios-pit.component';
import { TelaListagemDeRadComponent } from './tela-listagem-de-rad/tela-listagem-de-rad.component';
import { CorrecaoRadComponent } from './correcao-rad/correcao-rad.component';
import { ComentariosRadComponent } from './comentarios-rad/comentarios-rad.component';
const routes: Routes = [
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
  {path : 'telaPerfilC', component : TelaPerfilDeUsuarioComponent},
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 
}
