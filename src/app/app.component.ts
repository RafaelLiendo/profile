import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';
  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Arraste uma foto do perfil para cá ou clique aqui!',
    acceptedFileTypes: 'image/png, image/jpeg, image/gif',
    imagePreviewHeight: 70,
    imageCropAspectRatio: '1:1',
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 100,
    stylePanelLayout: 'compact circle',
    styleLoadIndicatorPosition: 'center bottom',
    styleButtonRemoveItemPosition: 'center bottom'
  };

  pondFiles = ['index.html'];

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}
