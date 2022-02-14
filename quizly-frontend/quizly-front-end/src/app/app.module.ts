import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderCategoriesComponent } from './components/header-categories/header-categories.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddCategoryModalComponent } from './components/add-category-modal/add-category-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategoryModalComponent } from './components/edit-category-modal/edit-category-modal.component';
import { DeleteCategoryModalComponent } from './components/delete-category-modal/delete-category-modal.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { HeaderLecturesComponent } from './components/header-lectures/header-lectures.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderCardsComponent } from './components/header-cards/header-cards.component';
import { LecturesComponent } from './components/lectures/lectures.component';
import { CardsComponent } from './components/cards/cards.component';
import { AddLectureModalComponent } from './components/add-lecture-modal/add-lecture-modal.component';
import { EditLectureModalComponent } from './components/edit-lecture-modal/edit-lecture-modal.component';
import { DeleteLectureModalComponent } from './components/delete-lecture-modal/delete-lecture-modal.component';
import { AddCardModalComponent } from './components/add-card-modal/add-card-modal.component';
import { EditCardModalComponent } from './components/edit-card-modal/edit-card-modal.component';
import { DeleteCardModalComponent } from './components/delete-card-modal/delete-card-modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';






@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryListComponent,
    AddCategoryModalComponent,
    EditCategoryModalComponent,
    DeleteCategoryModalComponent,
    LectureListComponent,
    HeaderLecturesComponent,
    CardListComponent,
    HeaderCardsComponent,
    LecturesComponent,
    CardsComponent,
    AddLectureModalComponent,
    EditLectureModalComponent,
    DeleteLectureModalComponent,
    HeaderCategoriesComponent,
    AddCardModalComponent,
    EditCardModalComponent,
    DeleteCardModalComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
