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

import Segments from './Uri/Segments';

/**
 * Class Uri
 * 
 * @package Kernel/Http/Message
 * 
 * @todo add domain, subdomain, tld
 */
export default class Uri {
    constructor() {
        this.scheme = window.location.protocol;
        this.segments = new Segments();
        this.host = window.location.hostname;
        this.port = window.location.port;
        this.hash = window.location.hash;

        // Query as Object
        this.query = (function (a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));
    }

    getScheme() {
        return this.scheme;
    }

    setSegments(segments) {
        if(Array.isArray(segments)) {
            this.segments = this.segments.setParts(segments);
        }

        return this;
    }

    getSegments() {
        return this.segments;
    }

    withSegments(segments) {
        let uri = new Uri();

        if(Array.isArray(segments)) {
            uri.segments = uri.segments.withParts(segments);
        }

        return uri;
    }

    setHost(host) {
        if(typeof host == "string") {
            this.host = host;
        }

        return this;
    }

    getHost() {
        return this.host;
    }

    setPort(port) {
        if(isNaN(port)) {
            this.port = port;
        }

        return this;
    }

    getPort() {
        return this.port;
    }

    setHash(hash) {
        if(typeof hash == "string") {
            this.hash = hash;
        }

        return this;
    }

    getHash() {
        return this.hash;
    }

    withHash(hash) {
        let uri = new Uri();

        if(typeof hash == "string") {
            uri.hash = hash;
        }

        return uri;
    }

    setQuery(query) {
        if(query instanceof Object) {
            this.query = query;
        }

        return this;
    }

    getQuery() {
        return this.query;
    }

    addQuery(key, value) {
        if(typeof key != "undefined" && typeof value != "undefined") {
            this.query[key] = value;
        }
        
        return this;
    }

    withQuery(query) {
        let uri = new Uri();
        
        if(query instanceof Object) {
            uri.query = query;
        }
        
        return uri;
    }

    buildQuery(params) {
        var uriComponent = encodeURIComponent;
        var query = Object.keys(params)
            .map(key => uriComponent(key) + '=' + uriComponent(params[key]))
            .join('&');
    }

    __toString() {
        let uriString = this.scheme + '//' + this.host + (this.port ? ':' + this.port : '') + this.segments.__toString();

        if(this.query.length > 0) {
            uriString = uriString + this.buildQuery(this.query);
        }

        if(this.hash) {
            uriString = uriString + this.hash;
        }

        return uriString;
    }
}