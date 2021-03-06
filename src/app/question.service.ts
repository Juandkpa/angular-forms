import { Injectable }       from '@angular/core';
 
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { AutocompleteQuestion } from './question-autocomplete';
 
@Injectable()
export class QuestionService {
 
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
 
    let questions: QuestionBase<any>[] = [

      new AutocompleteQuestion({
        key: 'userInput',
        label: 'Agrega un item',
        required: true,
        order: 4
      }),
 
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
 
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
 
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 
    return questions.sort((a, b) => a.order - b.order);
  }
}