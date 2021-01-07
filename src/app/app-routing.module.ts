import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';


import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
import { TelaPerfilDeUsuarioComponent } from './tela-perfil-de-usuario/tela-perfil-de-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TelaDeAcessoComponent } from './tela-de-acesso/tela-de-acesso.component';
import { TelaPitComponent } from './tela-pit/tela-pit.component';
import { TelaRadComponent } from './tela-rad/tela-rad.component';
import { TelaAtividadesComponent } from './tela-atividades/tela-atividades.component';
const routes: Routes = [
  {path : 'telaAtividades', component :TelaAtividadesComponent},
  {path : 'telaRad', component :TelaRadComponent},
  {path : 'telaPit', component :TelaPitComponent},
  {path : 'telaDeAcesso', component : TelaDeAcessoComponent},
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
