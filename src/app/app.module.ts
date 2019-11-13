import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { UserComponent } from './core/user/user.component';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { SearchComponent } from './components/search/search.component';

import { CoursesComponent } from './pages/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    CourseCardComponent,
    CoursesComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
