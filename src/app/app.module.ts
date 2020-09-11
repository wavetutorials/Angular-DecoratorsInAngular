import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StylingDivDirective } from './styling-div.directive';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StylingDivDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
