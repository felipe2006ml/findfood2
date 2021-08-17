import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Requisições HttpClient
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { NovoRestauranteComponent } from './novo-restaurante/novo-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    RestaurantesComponent,
    NovoRestauranteComponent
  ],
  imports: [
    BrowserModule,

    // Requisições HttpClient
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
