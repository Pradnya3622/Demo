import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/services', component: ServicesComponent },
  { path: '/blog', component: BlogComponent },
  {path: '/about',component: AboutComponent},
  {path: '/login',component: LoginComponent},
  {path: '/register',component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
