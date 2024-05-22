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
import { LicencasComponent } from './licencas/licencas.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginComponentSuccessfulDialogComponent } from './components/login-component-successful-dialog/login-component-successful-dialog.component';
import { LoginComponentFailDialogComponent } from './components/login-component-fail-dialog/login-component-fail-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AmbientesComponent,
    CardsComponent,
    LicencasComponent,
    LoginComponentSuccessfulDialogComponent,
    LoginComponentFailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule, // Add FormsModule here
    MatInputModule
    
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
