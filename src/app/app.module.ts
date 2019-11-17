import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { ApiService } from '../app/service/api.service';
import { AuthGuard } from './service/auth.guard';
import { DemoMaterialModule } from './modules/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IfElseComponent } from './component/if-else/if-else.component';
import { ServerComponent } from './component/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
