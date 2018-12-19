import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {User, IUserResponse} from './user.class';
import {AppService} from './app.service';
import {switchMap, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs'

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service'

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService]
})
export class DynamicFormComponent implements OnInit{

    @Input() questions: QuestionBase<any>[] = [];
    //filteredUsers: Observable<IUserResponse>;
    form: FormGroup;
    payLoad = '';
    
    constructor(private qcs: QuestionControlService,
                private appService: AppService) { }

    ngOnInit(): void {
        this.form = this.qcs.toFormGroup(this.questions);        
        
    };

    /*displayFn(user: User) {
        if (user) { return user.name; }
    }*/

    onSubmit(){
        this.payLoad = JSON.stringify(this.form.value);
    };

}