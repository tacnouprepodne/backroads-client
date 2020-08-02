import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './core/home/home.component';
import { ServicesProjectComponent } from './core/services-project/services-project.component';
import { FeaturedComponent } from './backroads/featured/featured.component';
import { DetailsComponent } from './backroads/featured/details/details.component';
import { AboutComponent } from './core/about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { PaginationComponent } from './backroads/featured/pagination/pagination.component';
import { JoinAsComponent } from './core/join-as/join-as.component';
import { LogInComponent } from './core/join-as/log-in/log-in.component';
import { RegisterComponent } from './core/join-as/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServicesProjectComponent,
    FeaturedComponent,
    DetailsComponent,
    AboutComponent,
    FooterComponent,
    PaginationComponent,
    JoinAsComponent,
    LogInComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
