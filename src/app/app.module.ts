import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{OrderModule} from 'ngx-order-pipe';        
import { AppComponent } from './app.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
