import {QuestionBase} from './question-base';
import { extend } from 'webdriver-js-extender';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}){
        super(options);
        this.options = options['options'] || [];
    }
}