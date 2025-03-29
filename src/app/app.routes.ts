import { EvolucaoPage } from './pages/evolucao/evolucao.page';
import { DiarioPage } from './pages/diario/diario.page';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'diario', component: DiarioPage },
  { path: 'evolucao', component: EvolucaoPage },
  { path: 'home', component: HomePage },
];
