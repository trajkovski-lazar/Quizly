import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import IsAuthenticated from './guards/auth-guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';




const routes: Routes = [
  { path: 'categories', component: CategoriesComponent, canActivate: [IsAuthenticated] },
  { path: 'categories/:categoryId/lectures', component: LecturesComponent, canActivate: [IsAuthenticated] },
  { path: 'categories/:categoryId/lectures/:lectureId/cards', component: CardsComponent, canActivate: [IsAuthenticated] },
  { path: 'login', component: LoginComponent, canActivate: [IsAuthenticated] },
  { path: 'register', component: RegisterComponent, canActivate: [IsAuthenticated] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [IsAuthenticated] },
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [IsAuthenticated] },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsAuthenticated]
})

export class AppRoutingModule { }
