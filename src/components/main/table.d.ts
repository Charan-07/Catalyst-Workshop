import { Datastore } from './datastore';
import { AuthorizedHttpClient } from '../utils/api-request';
import { ICatalystTable, ICatalystColumn, ICatalystRow, ParsableComponent } from '../utils/pojo/common';
declare type ICatalystRowInput = {
    [column_name: string]: any;
    ROWID?: string | number;
};
declare type ICatalystRowsResponse = {
    status: string;
    data: Array<ICatalystRow>;
    more_records?: boolean;
    next_token?: string;
};
export declare class Table implements ParsableComponent<ICatalystTable> {
    _tableDetails: ICatalystTable;
    identifier: string;
    requester: AuthorizedHttpClient;
    constructor(datastoreInstance: Datastore, tableDetails: ICatalystTable);
    getComponentName(): string;
    getColumnDetails(id: string | number): Promise<ICatalystColumn>;
    getAllColumns(): Promise<Array<ICatalystColumn>>;
    insertRow(row: ICatalystRowInput): Promise<ICatalystRow>;
    insertRows(rowArr: Array<ICatalystRowInput>): Promise<Array<ICatalystRow>>;
    /**
     * @deprecated This method doesn't support max row limit and defaults to 200.
     * This method will be removed in upcoming versions.
     *
     * Use {@link getPagedRows} or {@link getIterableRows} instead
     */
    getAllRows(): Promise<Array<ICatalystRow>>;
    getPagedRows({ nextToken, maxRows }?: {
        nextToken?: string;
        maxRows?: number | string;
    }): Promise<ICatalystRowsResponse>;
    getIterableRows(): AsyncGenerator<ICatalystRow, void>;
    getRow(id: string | number): Promise<ICatalystRow>;
    deleteRow(id: string | number): Promise<boolean>;
    deleteRows(ids: Array<string | number>): Promise<boolean>;
    updateRows(rows: Array<ICatalystRowInput & {
        ROWID: string | number;
    }>): Promise<Array<ICatalystRow>>;
    updateRow(row: ICatalystRowInput & {
        ROWID: string | number;
    }): Promise<ICatalystRow>;
    toString(): string;
    toJSON(): ICatalystTable;
}
export {};