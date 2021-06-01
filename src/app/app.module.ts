import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { BoddyComponent } from './components/boddy/boddy.component';
import { HeroesComponent } from './heroes/heroes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './pages/about/about.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { HeroeslistaComponent } from './heroeslista/heroeslista/heroeslista.component';
import { HeaderlistaComponent } from './heroeslista/headerlista/headerlista.component';
import {HttpClientModule} from '@angular/common/http';
import { HeroelistaComponent } from './heroeslista/heroelista/heroelista.component';
import { LoginComponent } from './autenticacion/auth/login/LoginComponent';
import { HomeComponent } from './autenticacion/page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoddyComponent,
    HeroesComponent,
    InicioComponent,
    HeroeComponent,
    AboutComponent,
    TableComponent,
    TitleComponent,
    FormComponent,
    HeaderlistaComponent,
    HeroelistaComponent,
    HeroeslistaComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
