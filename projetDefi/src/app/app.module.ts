import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginGuard } from './login/login.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { LoginArticleComponent } from './login-article/login-article.component';
import { ProgrammingProjectArticleComponent } from './programming-project-article/programming-project-article.component';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
import { ChallengesArticleComponent } from './challenges-article/challenges-article.component';
import { WhistleChallengeComponent } from './whistle-challenge/whistle-challenge.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    SideMenuComponent,
    MainArticleComponent,
    LoginArticleComponent,
    ProgrammingProjectArticleComponent,
    RegisterComponent,
    ChallengesArticleComponent,
    WhistleChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: MainArticleComponent
      },
      {
        path: 'login-component',
        component: LoginArticleComponent
      },
      {
        path: 'challenges-component',
        canActivate: [LoginGuard],
        component: ChallengesArticleComponent
      },
      {
        path: 'whistle-challenge',
        canActivate: [LoginGuard],
        component: WhistleChallengeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'programming-project',
        canActivate: [LoginGuard],
        component: ProgrammingProjectArticleComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
   ])
  ],
  providers: [LoginService, RegisterService, UserService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
