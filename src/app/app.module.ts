import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputMaskModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

