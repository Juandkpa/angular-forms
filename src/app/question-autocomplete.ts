import {QuestionBase} from './question-base';


export class AutocompleteQuestion extends QuestionBase<string> {
    controlType = 'autocomplete';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}){
        super(options);
        this.options = options['options'] || [];
    }
}