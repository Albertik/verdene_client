import {Component, ViewContainerRef, EventEmitter, Output} from '@angular/core';
import {MdDialogRef, MdDialog, MdDialogConfig, MdSidenav} from "@angular/material";
import {SidenavService} from "../../shared/services/sidenav.service";

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
})
export class GalleryComponent {

    dialogRef: MdDialogRef<PhotoDialog>;
    isOpenedSidenav: boolean = false;

    constructor(public dialog: MdDialog,
                public viewContainerRef: ViewContainerRef,
                public sidenavService: SidenavService) {
    }


    currentPhoto = {};

    photos = [
        {rows: 2, name: "1", description: "Pridėti aprašymą"},
        {rows: 1, name: "2", description: "Pridėti aprašymą"},
        {rows: 1, name: "3", description: "Pridėti aprašymą"},
        {rows: 2, name: "4", description: "Pridėti aprašymą"},
        {rows: 1, name: "5", description: "Pridėti aprašymą"},
        {rows: 2, name: "6", description: "Pridėti aprašymą"},
        {rows: 1, name: "7", description: "Pridėti aprašymą"},
        {rows: 1, name: "8", description: "Pridėti aprašymą"},
        {rows: 1, name: "9", description: "Pridėti aprašymą"},
    ];

    //TODO show photo info in sidenav, send some event to my-side-nav-layout
    showPhoto(photo) {
        this.currentPhoto = photo;

        this.isOpenedSidenav = !this.isOpenedSidenav;
        this.sidenavService.openRightSidenav(this.isOpenedSidenav);
        this.sidenavService.rightOpened$.subscribe((opened) => {
            this.isOpenedSidenav = opened;
        });
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
			<img [src]="imageUrl"
				alt="">
			<button type="button"
				(click)="dialogRef.close('yes')">Yes
			</button>
			<button type="button"
				(click)="dialogRef.close('no')">No
			</button>
    `
})
export class PhotoDialog {
    public imageUrl: string;

    constructor(public dialogRef: MdDialogRef<PhotoDialog>) {
    }
}
