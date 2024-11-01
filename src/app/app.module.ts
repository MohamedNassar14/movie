import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { ApikeyInterceptor } from './apikey.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { TermServiceComponent } from './term-service/term-service.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    MoviesComponent,
    PeopleComponent,
    TvComponent,
    MediaItemComponent,
    MediaDetailsComponent,
    SeemorePipe,
    SearchPipe,
    SpinnerComponent,
    HomeHeaderComponent,
    ContactComponent,
    TermServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:ApikeyInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
