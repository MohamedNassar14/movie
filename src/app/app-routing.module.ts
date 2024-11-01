import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { ContactComponent } from './contact/contact.component';
import { TermServiceComponent } from './term-service/term-service.component';



const routes: Routes = 
[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies', canActivate:[AuthGuard], component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard], component:TvComponent},
  {path:'people', canActivate:[AuthGuard], component:PeopleComponent},
  {path:'about', canActivate:[AuthGuard], component:AboutComponent},
  {path:'contact', canActivate:[AuthGuard], component:ContactComponent},
  {path:'term-service', canActivate:[AuthGuard], component:TermServiceComponent},
  {path:'mediaDetails/:id/:mediaType', canActivate:[AuthGuard], component:MediaDetailsComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
