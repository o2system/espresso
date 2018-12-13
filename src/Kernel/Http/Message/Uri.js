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
 * Class Uri
 * 
 * @package Kernel/Http/Message
 */
class Uri {
    constructor() {
        this.string = window.location.pathname.substr(1);
        this.segments = this.string.split('/');
    }

    get string() {
        return this.string;
    }

    set string(uriString) {
        this.string = uriString;
    }

    get segments() {
        return this.segments;
    }

    set segments(uriSegments) {
        this.segments = uriSegments;
    }

    segment(index) {
        if (this.segments.hasOwnProperty(index - 1)) {
            return this.segments[index - 1];
        }

        return null;
    }
}

module.exports = Uri;