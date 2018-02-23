import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import { DefaultFilter } from './default-filter';
export declare class SelectFilterComponent extends DefaultFilter implements OnInit {
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
}
