import {
    AfterViewInit,
    Component, ComponentFactoryResolver, Directive, Injectable, Input, OnInit, Type, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {PageNotFoundComponent} from "./page-not-found.component";
import {HomeComponent} from "../../../features/home/home.component";
import {PageNotFound1Component} from "./page-not-found1/page-not-found1.component";
import {PageNotFound2Component} from "./page-not-found2/page-not-found2.component";
import {PageNotFound3Component} from "./page-not-found3/page-not-found3.component";
import {PageNotFound4Component} from "./page-not-found4/page-not-found4.component";


@Directive({
    selector: '[ad-host]',
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
    }
}

export interface AdComponent {
    data: any;
}

export class AdItem {
    constructor(public component: Type<any>, public data: any) {
    }
}


@Injectable()
export class AdService {
    getAds() {
        

        return [
            // new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
            //
            // new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),
            //
            // new AdItem(HeroJobAdComponent, {
            //     headline: 'Hiring for several positions',
            //     body: 'Submit your resume today!'
            // }),
            //
            // new AdItem(HeroJobAdComponent, {
            //     headline: 'Openings in all departments',
            //     body: 'Apply today'
            // }),
            new AdItem(PageNotFound1Component, {}),
            // new AdItem(PageNotFound2Component, {}),
            new AdItem(PageNotFound3Component, {}),
            new AdItem(PageNotFound4Component, {})
        ];

    }
}

@Component({
    selector: 'add-banner',
    template: `
		<div (click)="onClick()" style="width: 100%; height: 100%">
			<ng-template ad-host></ng-template>
		</div>
    `

})
export class AdBannerComponent implements OnInit, AfterViewInit {
    @Input() ads: AdItem[];
    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    subscription: any;
    interval: any;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
    }

    onClick() {
        this.loadComponent()
    }

    loadComponent() {
        
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAddIndex];

        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 100000);
    }
}

@Component({
    template: `
		<div class="job-ad">
			<h4>{{data.headline}}</h4>

			{{data.body}}
		</div>
    `
})
export class HeroJobAdComponent implements AdComponent {
    @Input() data: any;

}

@Component({
    template: `
		<div class="hero-profile">
			<h3>Featured Hero Profile</h3>
			<h4>{{data.name}}</h4>

			<p>{{data.bio}}</p>

			<strong>Hire this hero today!</strong>
		</div>
    `
})
export class HeroProfileComponent implements AdComponent {
    @Input() data: any;
}


