import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrkutLogoComponent } from './shared/orkut-logo/orkut-logo.component';
import { OrkutInputComponent } from './shared/orkut-input/orkut-input.component';
import { OrkutButtonComponent } from './shared/orkut-button/orkut-button.component';
import { OrkutIconListComponent } from './components/orkut-side-profile/orkut-icon-list/orkut-icon-list.component';

import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { GoogleTitleComponent } from './pages/login/login-form/google-title/google-title.component';
import { LoginTitleComponent } from './pages/login/login-title/login-title.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDescriptionComponent } from './pages/profile/profile-description/profile-description.component';

import { OrkutSideProfileComponent } from './components/orkut-side-profile/orkut-side-profile.component';
import { OrkutImgComponent } from './components/orkut-img/orkut-img.component';
import { OrkutMenuComponent } from './components/orkut-menu/orkut-menu.component';
import { ProfileRatesComponent } from './pages/profile/profile-description/profile-rates/profile-rates.component';
import { ProfileInfosComponent } from './pages/profile/profile-description/profile-infos/profile-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrkutLogoComponent,
    OrkutButtonComponent,
    LoginFormComponent,
    OrkutInputComponent,
    GoogleTitleComponent,
    ProfileComponent,
    OrkutSideProfileComponent,
    ProfileDescriptionComponent,
    OrkutImgComponent,
    OrkutIconListComponent,
    OrkutMenuComponent,
    LoginTitleComponent,
    ProfileRatesComponent,
    ProfileInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
