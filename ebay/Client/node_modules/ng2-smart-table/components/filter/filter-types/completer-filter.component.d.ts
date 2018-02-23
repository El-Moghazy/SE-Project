import { OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
export declare class CompleterFilterComponent extends DefaultFilter implements OnInit {
    private completerService;
    completerContent: Subject<any>;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    inputTextChanged(event: string): void;
}
