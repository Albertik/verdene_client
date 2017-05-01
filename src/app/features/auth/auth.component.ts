import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Errors, UserService} from '../../shared';
import {Http} from "@angular/http";
import {WindowRef} from "../../common/windowRef";
import { environment } from '../../../environments/environment';


@Component({
    selector: 'auth-page',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
    authType: String = '';
    title: String = '';
    errors: Errors = new Errors();
    isSubmitting: boolean = false;
    authForm: FormGroup;
    sessiodId: String = '';

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService,
                private http: Http,
                private winRef: WindowRef,
                private fb: FormBuilder) {
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': '',
            'password': ''
        });
    }

    ngOnInit() {


        this.route.url.subscribe(data => {
            // Get the last piece of the URL (it's either 'login' or 'register')
            this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (this.authType === 'register') {
                this.authForm.addControl('username', new FormControl());
            }
        });
    }

    submitForm() {
        this.isSubmitting = true;
        this.errors = new Errors();

        let credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(
                data => this.router.navigateByUrl('/'),
                err => {
                    this.errors = err;
                    this.isSubmitting = false;
                }
            );
    }

    loginWithFb() {
        this.winRef.nativeWindow.location = `${environment.api_url}/auth/facebook`
    }
}
