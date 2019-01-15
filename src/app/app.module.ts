import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PhotosComponent } from "./photos/photos.component";
import { AppRoutingModule } from "./app-routing.module";
import { TableComponent } from "./table/table.component";
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, PhotosComponent, TableComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
