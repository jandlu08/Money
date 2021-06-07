import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AutofocusDirective } from './directives/auto-focus.directive';


@NgModule({
  imports: [CommonModule, NgxSpinnerModule],
  declarations: [AutofocusDirective],
  exports: [NgxSpinnerModule, AutofocusDirective],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }