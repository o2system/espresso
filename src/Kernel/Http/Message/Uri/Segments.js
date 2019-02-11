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
export default class Segments {
    constructor() {
        this.string = window.location.pathname.substr(1);
        this.parts = this.string.split('/');
    }

    setString(string) {
        this.string = string;

        return this;
    }

    getString() {
        return this.string;
    }

    addString(string) {
        if(typeof string == "string") {
            this.string = this.string + string;
            this.parts = this.string.split('/');
        }

        return this;
    }

    withString(string) {
        let segments = new Segments();

        if(typeof string == "string") {
            segments.string = string;
        }

        return segments;
    }

    getParts() {
        return this.parts;
    }

    setParts(parts) {
        if(Array.isArray(parts)) {
            this.parts = parts;
            this.string = parts.join('/');
        }

        return this;
    }

    getParts() {
        return this.parts;
    }

    addParts(parts) {
        if(Array.isArray(parts)) {
            this.parts.concat(parts);
            this.string = this.parts.join('/');
        }

        return this;
    }

    withParts(parts) {
        let segments = new Segments();

        if(Array.isArray(parts)) {
            segments.parts = parts;
            segments.string = parts.join('/');
        }
    }

    getPart(index) {
        if (this.parts.hasOwnProperty(index - 1)) {
            return this.parts[index - 1];
        }

        return null;
    }

    addPart(part) {
        if(typeof part != "undefined") {
            this.parts.push(part);
            this.string = this.parts.join('/');
        }
        
        return this;
    }

    withPart(part) {
        let segments = new Segments();
        segments.addPart(part);
        
        return segments;
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

    getNumOfParts() {
        return this.parts.length;
    }

    __toString() {
        if(this.parts.length > 0) {
            return '/' + this.parts.join('/');
        }

        return '';
    }
}