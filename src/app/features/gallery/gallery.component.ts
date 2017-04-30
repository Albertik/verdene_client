import {Component, ViewContainerRef} from '@angular/core';
import {MdDialogRef, MdDialog, MdDialogConfig} from "@angular/material";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  //
  // @ViewChild('sidenav') sidenav: MdSidenav;
  // @ViewChild('leftSidenav') leftSidenav: MdSidenav;

  dialogRef: MdDialogRef<PhotoDialog>;

  constructor(public dialog: MdDialog,
              public viewContainerRef: ViewContainerRef) {
  }


  currentPhoto = {};

  photos = [
    {rows: 2, name: "1", description: "Jeremy", age: 5},
    {rows: 1, name: "2", description: "David", age: 5},
    {rows: 1, name: "3", description: "Alex", age: 8},
    {rows: 2, name: "4", description: "Joey", age: '11 weeks'},
    {rows: 1, name: "5", description: "Igor", age: 5},
    {rows: 2, name: "6", description: "Kara", age: 3},
    {rows: 1, name: "7", description: "Stephen", age: 8},
    {rows: 1, name: "8", description: "Jules", age: 3},
    {rows: 1, name: "9", description: "Kara", age: 3},
  ];

  //TODO show photo info in sidenav, send some event to my-side-nav-layout
  showPhoto(photo) {
    this.currentPhoto = photo;
    // this.sidenav.open();
  }

  openPhotoInModal(imageUrl) {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(PhotoDialog, config);
    this.dialogRef.componentInstance.imageUrl = imageUrl;

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}

@Component({
  selector: 'photo-dialog',
  template: `
  <img [src]="imageUrl" alt="">
  <button type="button" (click)="dialogRef.close('yes')">Yes</button>
  <button type="button" (click)="dialogRef.close('no')">No</button>
  `
})
export class PhotoDialog {
  public imageUrl: string;

  constructor(public dialogRef: MdDialogRef<PhotoDialog>) {
  }
}
