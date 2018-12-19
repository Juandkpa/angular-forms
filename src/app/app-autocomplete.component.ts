import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';

import {User, IUserResponse} from './user.class';
import {AppService} from './app.service';
import {switchMap, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs'


@Component({
    selector: 'app-autocomp',
    template: `

    `
})
export class AppAutoCompleteComponent implements OnInit{
    @Input() control: FormControl;
    filteredUsers: Observable<IUserResponse>;
    constructor(
        private appService : AppService
    ) {}

    ngOnInit(): void {
        this.filteredUsers = this.control.valueChanges
        .pipe(            
            debounceTime(300),
            switchMap(value => this.appService.search({name: value}, 1))
        );
    }

    displayFn(user: User) {
        if (user) { return user.name; }
    }



}
