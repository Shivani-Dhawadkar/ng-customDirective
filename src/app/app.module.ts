import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/components/table/table.component';
import { BasicCssDirective } from './shared/directives/basic-css.directive';
import { AdvanceCssDirective } from './shared/directives/advance-css.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BasicCssDirective,
    AdvanceCssDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
