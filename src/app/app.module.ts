import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDashboardCompComponent } from './shaired/component/movie-dashboard-comp/movie-dashboard-comp.component';
import { MovieFormCompComponent } from './shaired/component/movie-form-comp/movie-form-comp.component';
import { MovieCardCompComponent } from './shaired/component/movie-card-comp/movie-card-comp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatdilogComponentComponent } from './shaired/component/matdilog-component/matdilog-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardCompComponent,
    MovieFormCompComponent,
    MovieCardCompComponent,
    MatdilogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
