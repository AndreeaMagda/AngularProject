import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { MoviesComponent } from './component/movies/movies.component';
import { BooksComponent } from './component/books/books.component';
import { GameComponent } from './component/game/game.component';
import { AboutComponent } from './component/about/about.component';
import { PlaceToVisitComponent } from './component/place-to-visit/place-to-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    QuizComponent,
    MoviesComponent,
    BooksComponent,
    GameComponent,
    AboutComponent,
    PlaceToVisitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
