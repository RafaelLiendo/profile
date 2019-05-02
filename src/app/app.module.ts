import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
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
