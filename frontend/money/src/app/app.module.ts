import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './shared/config.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';



import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AccountModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ConfigService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
