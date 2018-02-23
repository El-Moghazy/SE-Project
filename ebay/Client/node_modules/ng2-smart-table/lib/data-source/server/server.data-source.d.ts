import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Observable } from 'rxjs';
import { LocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import 'rxjs/add/operator/toPromise';
export declare class ServerDataSource extends LocalDataSource {
    protected http: Http;
    protected conf: ServerSourceConf;
    protected lastRequestCount: number;
    constructor(http: Http, conf?: ServerSourceConf | {});
    count(): number;
    getElements(): Promise<any>;
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    protected extractDataFromResponse(res: any): Array<any>;
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    protected extractTotalFromResponse(res: any): number;
    protected requestElements(): Observable<any>;
    protected createRequestOptions(): RequestOptionsArgs;
    protected addSortRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs;
    protected addFilterRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs;
    protected addPagerRequestOptions(requestOptions: RequestOptionsArgs): RequestOptionsArgs;
}
