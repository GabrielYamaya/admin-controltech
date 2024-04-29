import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriaServiceService } from './services/categoria-service.service';
import { AtivosService } from './services/ativos.service';
import { AmbientesComponent } from './ambientes/ambientes/ambientes.component';
import { CardsComponent } from './ambientes/cards/cards.component';
import { UsersService } from './services/users.service';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponentSuccessfulDialogComponent } from './components/login-component-successful-dialog/login-component-successful-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AmbientesComponent,
    CardsComponent,
    LoginComponentSuccessfulDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CategoriaServiceService,
    AtivosService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
