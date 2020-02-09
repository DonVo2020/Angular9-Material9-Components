import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';

const headers = [{ name: 'Accept', value: 'application/json' }];

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  //private uploader: FileUploader = new FileUploader({ url: 'http://localhost:9000/file/upload', autoUpload: false, headers: headers });
  private uploader: FileUploader = new FileUploader({ url: '<Your file server here>', autoUpload: false, headers: headers });
  private isOverDropZone: boolean;
  //private fileItems: FileItem[] = [];

  faUpload = faUpload;
  faTrash = faTrash;

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      console.log(file);
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      console.log("response:" + response);
      //alert('File uploaded successfully');
    };
  }

  fileOverDropZone(e: any): void {
    this.isOverDropZone = e;
  }

  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}
