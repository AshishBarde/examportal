import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategoryRoutingModule } from './add-category-routing.module';
import { AddCategoriesComponent } from './add-categories.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    
  ],
  exports: [
    
  ],
  imports: [
  //  CommonModule,
    AddCategoryRoutingModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AddCategoryModule { }
