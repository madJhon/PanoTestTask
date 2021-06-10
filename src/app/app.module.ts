import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanoListComponent } from './components/pano/pano-list/pano-list.component';
import { PanoItemComponent } from './components/pano/pano-item/pano-item.component';
import { PanoDetailComponent } from './components/pano/pano-detail/pano-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    PanoListComponent,
    PanoItemComponent,
    PanoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
