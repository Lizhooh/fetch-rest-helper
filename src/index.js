const isEnv = require('is-env');
const qs = require('qs');
const util = require('util');
const path = require('path');
const URL = require('url');

const _fetch = function () {
    if (isEnv('nodejs')) {
        return require('isomorphic-fetch');
    }
    else if (isEnv('react-native')) {
        return fetch;
    }
    else if (isEnv('browser') && window.hasOwnProperty('fetch')) {
        return fetch;
    }
    else if (isEnv('browser') && !window.hasOwnProperty('fetch')) {
        return require('isomorphic-fetch');
    }
} ();

class Helper {
    constructor(prefix, options) {
        this.prefix = prefix;
        this.options = {
            json: true,
            ...options,
        };
        if (!options.host) {
            console.error('please configure the host option.');
        }
    }
    __base(method, url, opt) {
        let query = '';
        if (util.isObject(opt.query)) {
            query = '?' + qs.stringify(opt.query);
        }
        const host = this.options.host || opt.host;
        url = URL.resolve(host, url) + query;
        const headers = this.options.headers || opt.headers || {};
        const usejson = this.options.json || opt.json;
        const body = usejson ? JSON.stringify(opt.body) : opt.body;
        if (usejson) {
            return _fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json', ...headers },
                body: body,
            }).then(res => res.json());
        }
        else {
            return _fetch(url, {
                method: method,
                headers: headers,
                body: body,
            });;
        }
    }
    index(opt = {}) {
        const url = this.prefix;
        return this.__base('GET', url, opt);
    }
    show(id, opt = {}) {
        const url = path.join(this.prefix, `${id}`);
        return this.__base('GET', url, opt);
    }
    create(opt = {}) {
        const url = this.prefix;
        return this.__base('POST', url, opt);
    }
    update(id, opt = {}) {
        const url = path.join(this.prefix, `${id}`);
        return this.__base('PUT', url, opt);
    }
    remove(id, opt = {}) {
        const url = path.join(this.prefix, `${id}`);
        return this.__base('DELETE', url, opt);
    }
    edit(id, opt = {}) {
        const url = path.join(this.prefix, `${id}`, 'edit');
        return this.__base('GET', url, opt);
    }
    new(opt = {}) {
        const url = path.join(this.prefix, 'new');
        return this.__base('GET', url, opt);
    }
}

module.exports = Helper;
