import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<any>[]) {
        let group:any =[];
        questions.forEach(question => {
            console.warn(" key ", question.key);
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                                    : new FormControl(question.value || '');
        });

        return new FormGroup(group);
    }

    addToForm(fG:FormGroup, field : string) {
        fG.addControl(field, new FormControl('', Validators.required))
    }
}

