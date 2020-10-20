import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaSobreNosComponent } from './tela-sobre-nos/tela-sobre-nos.component';
const routes: Routes = [
  {path : 'sobreNosC', component : TelaSobreNosComponent},
  {path : 'telaloginC', component : TelaLoginComponent},
  {path : 'telacadastroC', component : TelaCadastroComponent},
  {path: '', redirectTo: '/telaloginC', pathMatch: 'full'},
  {path : 'telaprincipalC', component : TelaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
 
}
