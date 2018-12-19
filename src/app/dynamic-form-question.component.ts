import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 
import { QuestionBase }     from './question-base';

import {User, IUserResponse} from './user.class';
import {AppService} from './app.service';
import {switchMap, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs'

 
@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit{
  filteredUsers: Observable<IUserResponse>;
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  
  constructor(
    private appService: AppService
  ) { }

  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit(): void {

    switch(this.question.controlType){
      case 'autocomplete':
        this._manageAutocomplete();
      break;

    }    
  }

  private _manageAutocomplete() {        
    this.filteredUsers = this.form.get(this.question.key).valueChanges
    .pipe(            
        debounceTime(300),
        switchMap(value => this.appService.search({name: value}, 1))
    );      
  }

  displayFn(user: User) {
    if (user) { return user.name; }
  }
  
}