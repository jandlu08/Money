import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AutofocusDirective } from './directives/auto-focus.directive';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [CommonModule, NgxSpinnerModule, AngularMaterialModule, ReactiveFormsModule, ToastrModule.forRoot()],
  declarations: [AutofocusDirective],
  exports: [NgxSpinnerModule, AutofocusDirective, AngularMaterialModule, ReactiveFormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
