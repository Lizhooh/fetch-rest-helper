import * as Koa from 'koa';
import * as Router from 'koa-router';

export interface Options {
    host: string,
    json?: Boolean,
    headers?: any,
}

export default class Helper {
    constructor(prefix: string, options: Options);

    /** GET /users */
    index: (opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** GET /users/:id */
    show: (id: string | number, opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** POST /users */
    create: (opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** PUT /users/:id */
    update: (id: string | number, opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** DELETE /users/:id */
    remove: (id: string | number, opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** GET /users/edit/:id */
    edit: (id: string | number, opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
    /** GET /users/new */
    new: (opt: {
        host?: string,
        json?: Boolean,
        headers?: any,
        body?: Object | any,
        query?: Object,
    }) => Promise<any>;
}

