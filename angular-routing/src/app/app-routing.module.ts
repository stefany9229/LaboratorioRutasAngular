import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RutaDinamicaComponent } from './ruta-dinamica/ruta-dinamica.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
 
  {
    path: 'rutaDinamica/:id',
    component: RutaDinamicaComponent

  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
