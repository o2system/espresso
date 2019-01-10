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
class Uri {
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

    getSegments() {
        return this.segments;
    }

    withSegments(segments) {
        if(Array.isArray(segments)){
            return this.segments.withParts(segments);
        }
    }

    getHost() {
        return this.host;
    }

    getPort() {
        return this.port;
    }

    getHash() {
        return this.hash;
    }

    withHash(hash) {
        this.hash = hash;
    }

    getQuery() {
        return this.query;
    }

    withQuery(params) {
        if(params instanceof Object) {
            this.query = Object.assign(this.query, params);
        }
    } 

    buildQuery(params) {
        var uriComponent = encodeURIComponent;
        var query = Object.keys(params)
            .map(key => uriComponent(key) + '=' + uriComponent(params[key]))
            .join('&');
    }

    __toString() {
        let uriString = this.scheme + '//' + this.hostname + (this.port ? ':' + this.port : '') + this.segments.__toString();

        if(this.query.length > 0) {
            uriString = uriString + this.buildQuery(this.query);
        }

        if(this.hash) {
            uriString = uriString + this.hash;
        }

        return uriString;
    }
}

export default Uri;