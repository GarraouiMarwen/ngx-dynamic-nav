import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNavModule} from 'ngx-nav';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
