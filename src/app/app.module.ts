import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './pages/services/services.component';
import { StoreComponent } from './pages/store/store.component';
import { CourseComponent } from './pages/course/course.component';
import { TipsComponent } from './pages/tips/tips.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    StoreComponent,
    CourseComponent,
    TipsComponent,
    BlogComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
