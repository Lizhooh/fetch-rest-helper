import * as Koa from 'koa';
import * as Router from 'koa-router';

export interface OptionsA {
    host: string,
    json?: Boolean,
    headers?: any,
}

export interface OptionsB {
    host?: string,
    json?: Boolean,
    headers?: any,
    body?: Object | any,
    query?: Object,
}

export default class Helper {
    constructor(prefix: string, options: OptionsA);

    /** GET /users */
    index: (opt: OptionsB) => Promise<any>;
    /** GET /users/:id */
    show: (id: string | number, opt: OptionsB) => Promise<any>;
    /** POST /users */
    create: (opt: OptionsB) => Promise<any>;
    /** PUT /users/:id */
    update: (id: string | number, opt: OptionsB) => Promise<any>;
    /** DELETE /users/:id */
    remove: (id: string | number, opt: OptionsB) => Promise<any>;
    /** GET /users/edit/:id */
    edit: (id: string | number, opt: OptionsB) => Promise<any>;
    /** GET /users/new */
    new: (opt: OptionsB) => Promise<any>;
}

