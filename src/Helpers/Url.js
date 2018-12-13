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

const Uri = require('../Kernel/Http/Message/Uri');

/**
 * Class Url
 * 
 * @package Helpers
 */
class Url {
    constructor() {
        this.uri = new Uri();
        this.string = this.uri.__toString();
    }

    getString() {
        return this.string;
    }

    base(segments, query) {
        if(typeof uri === 'undefined') {
            return this.string;
        } 

        if(Array.isArray(uri)) {
            this.uri.withSegments(segments);
        } else {
            this.uri.withSegments(segments.split('/'));
        }

        if(query instanceof Object) {
            this.uri.withQuery(query); 
        }

        return this.uri.__toString();
    }

    current(query) {
        if (query instanceof Object) {
            this.uri.withQuery(query);
        }

        return this.uri.__toString();
    }
}

module.exports = Url;