import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AdItem, AdService} from "./page-not-found-generator.component";

@Component({
    selector: 'page-not-found',
    template: `
		<div>
			<add-banner [ads]="ads"></add-banner>
		</div>
    `
})
export class PageNotFoundComponent implements OnInit {

    ads: AdItem[];

    constructor(private adService: AdService) {}

    ngOnInit() {
        this.ads = this.adService.getAds();
        console.log(this.ads)
    }
}