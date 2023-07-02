import { NgModule } from '@angular/core';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { CourseComponent } from './pages/course/course.component';
import { TipsComponent } from './pages/tips/tips.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // ...
  { path: '', component: HomeComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'loja', component: StoreComponent },
  { path: 'cursos', component: CourseComponent },
  { path: 'dicas', component: TipsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
