import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCategoriesRoutingModule } from './view-categories-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { Routes } from '@angular/router';
import { ViewCategoriesComponent } from './view-categories.component';

const routes: Routes = [];

@NgModule({

  declarations: [],
  imports: [
    ViewCategoriesRoutingModule
  ],
  
})
export class ViewCategoriesModule { }
