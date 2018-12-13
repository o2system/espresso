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

const Uri = require('./Uri');

/**
 * Class ServerRequest
 * 
 * @package Kernel/Http/Message
 */
class ServerRequest {
    constructor() {
        this.uri = new Uri();
        this.queryParams = new URLSearchParams(window.location.search);
        this.queryString = window.location.search.substring(1);
    }

    getUri() {
        return this.uri;
    }

    getQueryString() {
        return this.queryString;
    }

    getQueryParams() {
        return this.queryParams
    }

    getHash() {
        return window.location.hash;
    }
}

module.exports = ServerRequest;