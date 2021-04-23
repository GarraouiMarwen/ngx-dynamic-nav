import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDynamicNavModule} from 'ngx-dynamic-nav';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxDynamicNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
