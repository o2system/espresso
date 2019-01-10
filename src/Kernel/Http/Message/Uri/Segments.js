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
 * Class Segments
 * 
 * @package Kernel/Http/Message/Uri
 */
class Segments {
    constructor() {
        this.string = window.location.pathname.substr(1);
        this.parts = this.string.split('/');
    }

    getString() {
        return this.string;
    }

    withString(string) {
        this.string = string;
    }

    getParts() {
        return this.parts;
    }

    withParts(parts) {
        if(Array.isArray(parts)) {
            this.parts.concat(parts);
        }
    }

    setParts(parts) {
        this.parts = parts;
    }

    getPart(index) {
        if (this.parts.hasOwnProperty(index - 1)) {
            return this.parts[index - 1];
        }

        return null;
    }

    withPart(part) {
        this.parts.push(part);
    }

    hasPart(part) {
        let result = this.parts.find(part);

        if(typeof result === 'undefined') {
            return false;
        }

        return true;
    }

    filterPart(part) {
        return part.replace(/[\W_-]/g, '').replace(/_+/g, '-').replace(/-+/g, '-');
    }

    getTotalParts() {
        return this.parts.length;
    }

    __toString() {
        if(this.parts.length > 0) {
            return this.parts.join('/');
        }

        return '';
    }
}

export default Segments;