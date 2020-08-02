import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ServicesProjectComponent } from './core/services-project/services-project.component';
import { FeaturedComponent } from './backroads/featured/featured.component';
import { DetailsComponent } from './backroads/featured/details/details.component';
import { AboutComponent } from './core/about/about.component';
import { JoinAsComponent } from './core/join-as/join-as.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"join_as",component:JoinAsComponent},
  {path:"services",component:ServicesProjectComponent},
  {path:"about",component:AboutComponent},
  {path:"featured",component:FeaturedComponent},
  {path:"featured/:id",component:DetailsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
