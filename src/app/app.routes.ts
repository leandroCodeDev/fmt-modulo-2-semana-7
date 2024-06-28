import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

export const routes: Routes = [
    { path: 'cadastro-aluno', component: CadastroAlunoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }, // Substitua HomeComponent pelo seu componente real
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
