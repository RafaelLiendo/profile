import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import * as FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import * as FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import * as FilePondPluginImageResize from 'filepond-plugin-image-resize';
import * as FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageTransform
);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FilePondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
