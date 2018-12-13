/**
 * This file is part of the O2System Espresso Javascript Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

/**
 * Class Url
 * 
 * @package Helpers
 */
class Url {
    constructor() {
        this.string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    get string() {
        return this.string;
    }

    build(params, url) {
        var queryString = '';

        if(typeof url === 'undefined') {
            url = this.string;
        }

        for (var key in params) {
            var value = params[key];
            queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
        if (queryString.length > 0) {
            queryString = qs.substring(0, queryString.length - 1); //chop off last '&'
            url = url + '?' + queryString;
        }

        return url;
    }

    base(uri, params) {
        if(typeof uri === 'undefined') {
            return this.string;
        } 

        if(Array.isArray(uri)) {
            return this.build(params, this.string + '/' + uri.join('/'));
        }

        return this.build(params, this.string);
    }

    current(params) {
        if(typeof params === 'undefined') {
            return this.string;
        }

        return this.build(params, this.string);
    }

    buildQuery(params) {
        var uriComponent = encodeURIComponent;
        var query = Object.keys(params)
            .map(key => uriComponent(key) + '=' + uriComponent(params[key]))
            .join('&');
    }
}