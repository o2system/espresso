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

import Uri from "../Kernel/Http/Message/Uri";

/**
 * Class Url
 * 
 * @package Helpers
 */
export default class Url {
    constructor() {
        this.uri = new Uri();
        this.string = this.uri.__toString();
    }

    getString() {
        return this.string;
    }

    base(segments, query) {
        let uri = this.uri;
        
        if(typeof segments === 'undefined') {
            return this.string;
        } 

        if(Array.isArray(segments)) {
            uri = this.uri.setSegments(segments);
        } else {
            uri = this.uri.setSegments(segments.split('/'));
        }

        if(query instanceof Object) {
            uri = uri.setQuery(query); 
        }

        return uri.__toString();
    }

    current(query) {
        if (query instanceof Object) {
            this.uri.withQuery(query);
        }

        return this.uri.__toString();
    }

    redirect(segments, query) {
        let href = this.base(segments, query);

        window.location.href = href;
    }
}