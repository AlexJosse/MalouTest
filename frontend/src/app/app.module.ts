import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import {
  LazyLoadImageModule,
} from "ng-lazyload-image";
// import { IntersectionObserverEntry } from "";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}