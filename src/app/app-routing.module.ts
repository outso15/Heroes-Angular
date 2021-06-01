import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { BoddyComponent } from './components/boddy/boddy.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './pages/about/about.component';
import { FormComponent } from './components/form/form.component';
import { HeaderlistaComponent } from './heroeslista/headerlista/headerlista.component';
import { HeroeslistaComponent } from './heroeslista/heroeslista/heroeslista.component';
import { HeroelistaComponent } from './heroeslista/heroelista/heroelista.component';
import { HomeComponent } from './autenticacion/page/home/home.component';
import { LoginComponent } from './autenticacion/auth/login/LoginComponent';
import { AuthGuard } from './autenticacion/guards/auth.guard';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'auth/login', component: LoginComponent
  },
  {
    path: 'heroeslista', component: HeroeslistaComponent
  },
  {
    path: 'heroelista/:id', component: HeroelistaComponent
  },
  {
  path: 'heroes', component: HeroesComponent
  },
  {
    path: 'inicio', component: InicioComponent,   canActivate: [AuthGuard]
  },
  {
    path: 'primero', component: BoddyComponent
  },
  {
    path: 'heroe/:id', component: HeroeComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio',  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
